import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Loader2 } from "lucide-react";

const searchSchema = z.object({
  mode: z.enum(["login", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "লগইন / নিবন্ধন — খুলনা নাগরিক সেবা" },
      { name: "description", content: "নাগরিক সেবা ব্যবহার করতে লগইন করুন বা নতুন অ্যাকাউন্ট তৈরি করুন।" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = useSearch({ from: "/auth" });
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate({ to: "/dashboard" });
  }, [user, loading, navigate]);

  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden bg-[image:var(--gradient-hero)] p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
          <ArrowLeft className="h-4 w-4" /> হোমে ফিরুন
        </Link>
        <div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-foreground/20 backdrop-blur">
            <span className="font-display text-2xl font-bold">খু</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight">
            খুলনা নাগরিক সেবা প্ল্যাটফর্মে স্বাগতম
          </h1>
          <p className="mt-4 max-w-md text-primary-foreground/85">
            একটি অ্যাকাউন্ট দিয়ে সকল সেবা — ট্রেড লাইসেন্স, জন্ম সনদ, হোল্ডিং কর, অভিযোগ — এক জায়গায়।
          </p>
        </div>
        <div className="text-xs opacity-70">© খুলনা সিটি কর্পোরেশন</div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> হোম
            </Link>
          </div>

          <Tabs defaultValue={mode === "signup" ? "signup" : "login"} className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">লগইন</TabsTrigger>
              <TabsTrigger value="signup">নিবন্ধন</TabsTrigger>
            </TabsList>
            <TabsContent value="login"><LoginForm /></TabsContent>
            <TabsContent value="signup"><SignupForm /></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function GoogleButton() {
  const [busy, setBusy] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        const res = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/dashboard" });
        if (res.error) {
          toast.error("গুগল লগইন ব্যর্থ হয়েছে");
          setBusy(false);
        }
      }}
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : (
        <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .6-2.2 1-3.8 1-3 0-5.4-2-6.3-4.7H2v3a11 11 0 0 0 10 6.1z"/><path fill="#FBBC05" d="M5.7 13.9a6.6 6.6 0 0 1 0-4.2v-3H2a11 11 0 0 0 0 10.2l3.7-3z"/><path fill="#EA4335" d="M12 5.4c1.7 0 3.2.6 4.4 1.7L19.5 4A11 11 0 0 0 2 6.7l3.7 3C6.6 7.3 9 5.4 12 5.4z"/></svg>
      )}
      Google দিয়ে চালিয়ে যান
    </Button>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  return (
    <Card className="mt-4 border-0 shadow-none">
      <CardContent className="space-y-4 p-0 pt-4">
        <GoogleButton />
        <div className="relative text-center text-xs text-muted-foreground">
          <span className="bg-background px-2">অথবা ইমেইল দিয়ে</span>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-border" />
        </div>

        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            setBusy(false);
            if (error) return toast.error(error.message);
            toast.success("সফলভাবে লগইন হয়েছে");
            navigate({ to: "/dashboard" });
          }}
        >
          <div>
            <label className="text-sm font-medium">ইমেইল</label>
            <Input className="mt-1.5" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">পাসওয়ার্ড</label>
              <Link to="/forgot-password" className="text-xs text-primary hover:underline">পাসওয়ার্ড ভুলে গেছেন?</Link>
            </div>
            <Input className="mt-1.5" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full" disabled={busy}>
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} লগইন করুন
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function SignupForm() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  return (
    <Card className="mt-4 border-0 shadow-none">
      <CardContent className="space-y-4 p-0 pt-4">
        <GoogleButton />
        <div className="relative text-center text-xs text-muted-foreground">
          <span className="bg-background px-2">অথবা ফর্ম পূরণ করুন</span>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-border" />
        </div>

        <form
          className="space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const full_name = String(fd.get("full_name") || "").trim();
            const phone = String(fd.get("phone") || "").trim();
            const email = String(fd.get("email") || "").trim();
            const password = String(fd.get("password") || "");

            const parsed = z.object({
              full_name: z.string().min(2, "নাম দিন").max(100),
              phone: z.string().regex(/^01\d{9}$/, "সঠিক মোবাইল নম্বর দিন"),
              email: z.string().email("সঠিক ইমেইল দিন").max(255),
              password: z.string().min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের"),
            }).safeParse({ full_name, phone, email, password });

            if (!parsed.success) return toast.error(parsed.error.issues[0].message);

            setBusy(true);
            const { error } = await supabase.auth.signUp({
              email, password,
              options: {
                emailRedirectTo: window.location.origin + "/dashboard",
                data: { full_name, phone },
              },
            });
            setBusy(false);
            if (error) return toast.error(error.message);
            toast.success("নিবন্ধন সফল! ইমেইল যাচাই করতে পারেন।");
            navigate({ to: "/dashboard" });
          }}
        >
          <div>
            <label className="text-sm font-medium">পূর্ণ নাম</label>
            <Input className="mt-1.5" name="full_name" required placeholder="মোঃ রহিম উদ্দিন" />
          </div>
          <div>
            <label className="text-sm font-medium">মোবাইল</label>
            <Input className="mt-1.5" name="phone" required placeholder="০১৭xxxxxxxx" />
          </div>
          <div>
            <label className="text-sm font-medium">ইমেইল</label>
            <Input className="mt-1.5" name="email" type="email" required />
          </div>
          <div>
            <label className="text-sm font-medium">পাসওয়ার্ড</label>
            <Input className="mt-1.5" name="password" type="password" required minLength={8} />
            <p className="mt-1 text-xs text-muted-foreground">কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন</p>
          </div>
          <Button type="submit" variant="accent" className="w-full mt-2" disabled={busy}>
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} অ্যাকাউন্ট তৈরি করুন
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            নিবন্ধন করার মাধ্যমে আপনি আমাদের{" "}
            <a href="#" className="text-primary hover:underline">ব্যবহারের শর্ত</a> মেনে নিচ্ছেন।
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
