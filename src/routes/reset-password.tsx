import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "নতুন পাসওয়ার্ড সেট করুন" }] }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-secondary/30 px-4">
      <Card className="w-full max-w-md shadow-[var(--shadow-elegant)]">
        <CardContent className="p-8">
          <h1 className="font-display text-2xl font-bold">নতুন পাসওয়ার্ড সেট করুন</h1>
          <p className="mt-2 text-sm text-muted-foreground">কমপক্ষে ৮ অক্ষরের একটি শক্তিশালী পাসওয়ার্ড দিন।</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (password.length < 8) return toast.error("কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন");
              setBusy(true);
              const { error } = await supabase.auth.updateUser({ password });
              setBusy(false);
              if (error) return toast.error(error.message);
              toast.success("পাসওয়ার্ড আপডেট হয়েছে");
              navigate({ to: "/dashboard" });
            }}
          >
            <div>
              <label className="text-sm font-medium">নতুন পাসওয়ার্ড</label>
              <Input className="mt-1.5" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <Loader2 className="h-4 w-4 animate-spin" />} পাসওয়ার্ড আপডেট করুন
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
