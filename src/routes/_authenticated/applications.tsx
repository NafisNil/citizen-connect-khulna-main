import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/_authenticated/applications")({
  head: () => ({ meta: [{ title: "আবেদনসমূহ — খুলনা নাগরিক সেবা" }] }),
  component: ApplicationsPage,
});

const typeLabel: Record<string, string> = {
  trade_license_new: "ট্রেড লাইসেন্স (নতুন)",
  trade_license_renewal: "ট্রেড লাইসেন্স নবায়ন",
  auto_rickshaw_registration: "অটোরিকশা নিবন্ধন",
  birth_certificate: "জন্ম সনদ",
  death_certificate: "মৃত্যু সনদ",
  holding_tax: "হোল্ডিং কর",
};

const statusLabel: Record<string, { text: string; tone: "default" | "secondary" | "destructive" }> = {
  submitted: { text: "জমা হয়েছে", tone: "secondary" },
  under_review: { text: "পর্যালোচনাধীন", tone: "default" },
  approved: { text: "অনুমোদিত", tone: "default" },
  rejected: { text: "বাতিল", tone: "destructive" },
  completed: { text: "সম্পন্ন", tone: "default" },
};

function ApplicationsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("applications").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">আবেদনসমূহ</h1>
        <p className="mt-1 text-sm text-muted-foreground">আপনার সকল জমাকৃত আবেদন</p>
      </div>

      {isLoading && <div className="text-sm text-muted-foreground">লোড হচ্ছে...</div>}
      {!isLoading && (data?.length ?? 0) === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
            <div className="mt-3 font-medium">এখনো কোনো আবেদন নেই</div>
            <p className="mt-1 text-sm text-muted-foreground">ড্যাশবোর্ড থেকে নতুন সেবার জন্য আবেদন করুন।</p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {data?.map((a) => {
          const s = statusLabel[a.status] ?? { text: a.status, tone: "secondary" as const };
          return (
            <Card key={a.id}>
              <CardContent className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-5">
                <div className="min-w-0">
                  <div className="truncate font-medium">{typeLabel[a.type] ?? a.type}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>ট্র্যাকিং: <span className="font-mono text-foreground">{a.tracking_no}</span></span>
                    <span>{new Date(a.created_at).toLocaleDateString("bn-BD")}</span>
                  </div>
                </div>
                <Badge variant={s.tone}>{s.text}</Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
