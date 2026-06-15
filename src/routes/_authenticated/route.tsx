import { createFileRoute, Outlet, redirect, Link, useRouterState } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, FileText, MessageSquareWarning, Bell, User,
  LogOut, Home, Moon, Sun,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: AuthenticatedLayout,
});

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "ড্যাশবোর্ড" },
  { to: "/applications", icon: FileText, label: "আবেদনসমূহ" },
  { to: "/complaints", icon: MessageSquareWarning, label: "অভিযোগ" },
  { to: "/notifications", icon: Bell, label: "নোটিফিকেশন" },
  { to: "/profile", icon: User, label: "প্রোফাইল" },
] as const;

function AuthenticatedLayout() {
  const { user, signOut } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-dvh w-full bg-secondary/30">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
            <span className="font-display text-base font-bold">খু</span>
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold">খুলনা নাগরিক সেবা</div>
            <div className="text-[10px] uppercase tracking-wider opacity-70">Dashboard</div>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/85 hover:bg-sidebar-accent">
            <Home className="h-4 w-4" /> ওয়েবসাইটে ফিরুন
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b bg-background px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">স্বাগতম</div>
            <div className="truncate text-sm font-semibold">{user?.email}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => { await signOut(); navigate({ to: "/" }); }}
            >
              <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">লগ আউট</span>
            </Button>
          </div>
        </header>

        {/* Mobile nav */}
        <nav className="flex gap-1 overflow-x-auto border-b bg-background px-3 py-2 lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ${
                  active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" /> {item.label}
              </Link>
            );
          })}
        </nav>

        <main className="flex-1 p-4 sm:p-6 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
