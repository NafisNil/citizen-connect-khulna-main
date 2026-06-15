import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "পাসওয়ার্ড পুনরুদ্ধার — খুলনা নাগরিক সেবা" }] }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-secondary/30 px-4">
      <Card className="w-full max-w-md shadow-[var(--shadow-elegant)]">
        <CardContent className="p-8">
          <Link to="/auth" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> লগইন পেজে ফিরুন
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold">পাসওয়ার্ড পুনরুদ্ধার</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার ইমেইল ঠিকানা দিন। আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব।
          </p>

          {sent ? (
            <div className="mt-6 rounded-lg border border-success/30 bg-success/10 p-4 text-sm text-success">
              যদি অ্যাকাউন্ট থাকে, পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে।
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setBusy(true);
                const { error } = await supabase.auth.resetPasswordForEmail(email, {
                  redirectTo: window.location.origin + "/reset-password",
                });
                setBusy(false);
                if (error) return toast.error(error.message);
                setSent(true);
              }}
            >
              <div>
                <label className="text-sm font-medium">ইমেইল</label>
                <Input className="mt-1.5" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={busy}>
                {busy && <Loader2 className="h-4 w-4 animate-spin" />} রিসেট লিংক পাঠান
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
