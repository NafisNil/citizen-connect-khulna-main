import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, MessageSquareWarning, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/complaints")({
  head: () => ({ meta: [{ title: "অভিযোগ — খুলনা নাগরিক সেবা" }] }),
  component: ComplaintsPage,
});

const statusLabel: Record<string, { text: string; tone: "default" | "secondary" | "destructive" }> = {
  open: { text: "নতুন", tone: "secondary" },
  in_progress: { text: "প্রক্রিয়াধীন", tone: "default" },
  resolved: { text: "সমাধান হয়েছে", tone: "default" },
  closed: { text: "বন্ধ", tone: "secondary" },
};

function ComplaintsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["complaints"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("complaints").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const mut = useMutation({
    mutationFn: async (vals: { category: string; subject: string; description: string; location: string; ward_no: number | null }) => {
      const { error } = await supabase.from("complaints").insert({ user_id: user!.id, ...vals });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("অভিযোগ জমা হয়েছে");
      qc.invalidateQueries({ queryKey: ["complaints"] });
      setOpen(false);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">অভিযোগ</h1>
          <p className="mt-1 text-sm text-muted-foreground">আপনার দায়েরকৃত সকল অভিযোগ</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="accent"><Plus className="h-4 w-4" /> নতুন অভিযোগ</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>নতুন অভিযোগ দায়ের</DialogTitle></DialogHeader>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const w = fd.get("ward_no");
                mut.mutate({
                  category: String(fd.get("category") || "").trim() || "সাধারণ",
                  subject: String(fd.get("subject") || "").trim(),
                  description: String(fd.get("description") || "").trim(),
                  location: String(fd.get("location") || "").trim(),
                  ward_no: w ? Number(w) : null,
                });
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div><label className="text-sm font-medium">ক্যাটাগরি</label>
                  <Input name="category" placeholder="যেমন: পানি, রাস্তা, পরিচ্ছন্নতা" /></div>
                <div><label className="text-sm font-medium">ওয়ার্ড</label>
                  <Input name="ward_no" type="number" min={1} max={31} placeholder="১-৩১" /></div>
              </div>
              <div><label className="text-sm font-medium">বিষয়</label><Input name="subject" required maxLength={150} /></div>
              <div><label className="text-sm font-medium">অবস্থান</label><Input name="location" placeholder="রাস্তা/এলাকা" /></div>
              <div><label className="text-sm font-medium">বিবরণ</label><Textarea name="description" required rows={4} maxLength={1000} /></div>
              <Button type="submit" className="w-full" disabled={mut.isPending}>
                {mut.isPending && <Loader2 className="h-4 w-4 animate-spin" />} অভিযোগ জমা দিন
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading && <div className="text-sm text-muted-foreground">লোড হচ্ছে...</div>}
      {!isLoading && (data?.length ?? 0) === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <MessageSquareWarning className="mx-auto h-10 w-10 text-muted-foreground" />
            <div className="mt-3 font-medium">কোনো অভিযোগ নেই</div>
            <p className="mt-1 text-sm text-muted-foreground">"নতুন অভিযোগ" বাটনে ক্লিক করে অভিযোগ দায়ের করুন।</p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {data?.map((c) => {
          const s = statusLabel[c.status] ?? { text: c.status, tone: "secondary" as const };
          return (
            <Card key={c.id}>
              <CardContent className="p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">{c.category}</span>
                      <span className="font-mono">{c.tracking_no}</span>
                    </div>
                    <h3 className="mt-2 font-medium">{c.subject}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <Badge variant={s.tone}>{s.text}</Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
