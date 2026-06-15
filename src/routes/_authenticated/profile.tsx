import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/profile")({
  head: () => ({ meta: [{ title: "প্রোফাইল — খুলনা নাগরিক সেবা" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [editing, setEditing] = useState(false);

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles").select("*").eq("id", user!.id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const mut = useMutation({
    mutationFn: async (vals: { full_name: string; full_name_bn: string | null; phone: string | null; nid: string | null; ward_no: number | null; address: string | null }) => {
      const { error } = await supabase.from("profiles").update(vals).eq("id", user!.id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
      toast.success("প্রোফাইল আপডেট হয়েছে");
      setEditing(false);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  if (isLoading) return <div className="text-sm text-muted-foreground">লোড হচ্ছে...</div>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">প্রোফাইল</h1>
        <p className="mt-1 text-sm text-muted-foreground">আপনার ব্যক্তিগত তথ্যাদি দেখুন ও সম্পাদনা করুন।</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-2xl font-bold text-primary-foreground">
              {(profile?.full_name?.[0] ?? "U").toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-lg font-semibold">{profile?.full_name}</div>
              <div className="truncate text-sm text-muted-foreground">{user?.email}</div>
            </div>
            <div className="ml-auto">
              {!editing && <Button variant="outline" size="sm" onClick={() => setEditing(true)}>সম্পাদনা</Button>}
            </div>
          </div>

          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              mut.mutate({
                full_name: String(fd.get("full_name") || "").trim(),
                full_name_bn: String(fd.get("full_name_bn") || "").trim() || null,
                phone: String(fd.get("phone") || "").trim() || null,
                nid: String(fd.get("nid") || "").trim() || null,
                ward_no: fd.get("ward_no") ? Number(fd.get("ward_no")) : null,
                address: String(fd.get("address") || "").trim() || null,
              });
            }}
          >
            <Field name="full_name" label="পূর্ণ নাম (ইংরেজি)" defaultValue={profile?.full_name ?? ""} editing={editing} />
            <Field name="full_name_bn" label="পূর্ণ নাম (বাংলা)" defaultValue={profile?.full_name_bn ?? ""} editing={editing} />
            <Field name="phone" label="মোবাইল" defaultValue={profile?.phone ?? ""} editing={editing} />
            <Field name="nid" label="জাতীয় পরিচয়পত্র" defaultValue={profile?.nid ?? ""} editing={editing} />
            <Field name="ward_no" label="ওয়ার্ড নং" type="number" defaultValue={String(profile?.ward_no ?? "")} editing={editing} />
            <Field name="address" label="ঠিকানা" defaultValue={profile?.address ?? ""} editing={editing} className="sm:col-span-2" />

            {editing && (
              <div className="flex gap-2 sm:col-span-2">
                <Button type="submit" disabled={mut.isPending}>
                  {mut.isPending && <Loader2 className="h-4 w-4 animate-spin" />} সংরক্ষণ করুন
                </Button>
                <Button type="button" variant="outline" onClick={() => setEditing(false)}>বাতিল</Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ name, label, defaultValue, editing, type = "text", className = "" }: {
  name: string; label: string; defaultValue: string; editing: boolean; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {editing ? (
        <Input name={name} type={type} defaultValue={defaultValue} className="mt-1" />
      ) : (
        <div className="mt-1 rounded-md border bg-secondary/40 px-3 py-2 text-sm">{defaultValue || "—"}</div>
      )}
    </div>
  );
}
