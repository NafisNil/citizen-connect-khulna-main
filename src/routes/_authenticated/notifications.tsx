import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CheckCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/notifications")({
  head: () => ({ meta: [{ title: "নোটিফিকেশন — খুলনা নাগরিক সেবা" }] }),
  component: NotificationsPage,
});

function NotificationsPage() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notifications").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">নোটিফিকেশন</h1>
        <p className="mt-1 text-sm text-muted-foreground">আপনার সকল আপডেট ও বার্তা</p>
      </div>

      {isLoading && <div className="text-sm text-muted-foreground">লোড হচ্ছে...</div>}
      {!isLoading && (data?.length ?? 0) === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <Bell className="mx-auto h-10 w-10 text-muted-foreground" />
            <div className="mt-3 font-medium">কোনো নোটিফিকেশন নেই</div>
            <p className="mt-1 text-sm text-muted-foreground">নতুন আপডেট এলে এখানে দেখাবে।</p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-2">
        {data?.map((n) => (
          <Card key={n.id} className={n.is_read ? "" : "border-l-4 border-l-accent"}>
            <CardContent className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 p-5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {!n.is_read && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />}
                  <div className="font-medium">{n.title}</div>
                </div>
                {n.body && <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>}
                <div className="mt-2 text-xs text-muted-foreground">
                  {new Date(n.created_at).toLocaleString("bn-BD")}
                </div>
              </div>
              {!n.is_read && (
                <Button variant="ghost" size="sm" onClick={() => markRead.mutate(n.id)}>
                  <CheckCheck className="h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
