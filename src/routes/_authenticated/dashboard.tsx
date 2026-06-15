import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText, MessageSquareWarning, CheckCircle2, Clock, ArrowRight,
  Building2, Baby, Receipt, Bike,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "ড্যাশবোর্ড — খুলনা নাগরিক সেবা" }] }),
  component: Dashboard,
});

const statusLabel: Record<string, { text: string; tone: "default" | "secondary" | "destructive" }> = {
  submitted: { text: "জমা হয়েছে", tone: "secondary" },
  under_review: { text: "পর্যালোচনাধীন", tone: "default" },
  approved: { text: "অনুমোদিত", tone: "default" },
  rejected: { text: "বাতিল", tone: "destructive" },
  completed: { text: "সম্পন্ন", tone: "default" },
};

const quickServices = [
  { icon: Building2, label: "ট্রেড লাইসেন্স" },
  { icon: Baby, label: "জন্ম সনদ" },
  { icon: Receipt, label: "হোল্ডিং কর" },
  { icon: Bike, label: "অটোরিকশা" },
];

function Dashboard() {
  const apps = useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("id, tracking_no, type, status, created_at")
        .order("created_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data;
    },
  });

  const complaints = useQuery({
    queryKey: ["my-complaints-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("complaints").select("*", { count: "exact", head: true });
      if (error) throw error;
      return count ?? 0;
    },
  });

  const list = apps.data ?? [];
  const cards = [
    { label: "মোট আবেদন", value: list.length, icon: FileText, color: "text-primary bg-primary/10" },
    { label: "প্রক্রিয়াধীন", value: list.filter(a => a.status === "submitted" || a.status === "under_review").length, icon: Clock, color: "text-warning-foreground bg-warning/20" },
    { label: "সম্পন্ন", value: list.filter(a => a.status === "approved" || a.status === "completed").length, icon: CheckCircle2, color: "text-success bg-success/10" },
    { label: "অভিযোগ", value: complaints.data ?? 0, icon: MessageSquareWarning, color: "text-accent bg-accent/10" },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">ড্যাশবোর্ড</h1>
        <p className="mt-1 text-sm text-muted-foreground">আপনার সকল আবেদন ও কার্যক্রম এক নজরে</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Card key={c.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.color}`}>
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl font-bold">{c.value}</div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick services */}
      <Card>
        <CardContent className="p-5">
          <div className="mb-4 text-sm font-semibold">দ্রুত সেবা</div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickServices.map((s) => (
              <button key={s.label} className="group flex items-center gap-3 rounded-xl border bg-background p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 text-sm font-medium">{s.label}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent applications */}
      <Card>
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-semibold">সাম্প্রতিক আবেদন</div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/applications">সব দেখুন <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </div>

          {apps.isLoading && <div className="py-8 text-center text-sm text-muted-foreground">লোড হচ্ছে...</div>}
          {!apps.isLoading && list.length === 0 && (
            <div className="rounded-lg border border-dashed py-10 text-center">
              <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
              <div className="mt-3 font-medium">এখনো কোনো আবেদন নেই</div>
              <p className="mt-1 text-sm text-muted-foreground">নতুন আবেদন শুরু করতে উপরের সেবা নির্বাচন করুন।</p>
            </div>
          )}
          <div className="space-y-2">
            {list.map((a) => {
              const s = statusLabel[a.status] ?? { text: a.status, tone: "secondary" as const };
              return (
                <div key={a.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-background p-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{a.type.replace(/_/g, " ")}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      ট্র্যাকিং: <span className="font-mono">{a.tracking_no}</span>
                    </div>
                  </div>
                  <Badge variant={s.tone}>{s.text}</Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
