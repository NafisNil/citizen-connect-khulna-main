import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">৪০৪</h1>
        <h2 className="mt-4 text-xl font-semibold">পেজটি খুঁজে পাওয়া যায়নি</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনি যে পেজটি খুঁজছেন তা সরিয়ে নেওয়া হয়েছে বা বিদ্যমান নেই।
        </p>
        <a
          href="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          হোমে ফিরুন
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">পেজটি লোড হয়নি</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          একটি সমস্যা হয়েছে। অনুগ্রহ করে পুনরায় চেষ্টা করুন।
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            পুনরায় চেষ্টা করুন
          </button>
          <a href="/" className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm">হোম</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "খুলনা নাগরিক সেবা — Khulna Citizen Services" },
      { name: "description", content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।" },
      { name: "author", content: "Khulna City Corporation" },
      { property: "og:title", content: "খুলনা নাগরিক সেবা — Khulna Citizen Services" },
      { property: "og:description", content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "খুলনা নাগরিক সেবা — Khulna Citizen Services" },
      { name: "twitter:description", content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6670b9a-648b-4ee5-987d-6f53e9c66610/id-preview-996ab32e--961cf7cd-4005-4ceb-84c1-bbb4811bdd7a.lovable.app-1781464513634.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6670b9a-648b-4ee5-987d-6f53e9c66610/id-preview-996ab32e--961cf7cd-4005-4ceb-84c1-bbb4811bdd7a.lovable.app-1781464513634.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Noto+Serif+Bengali:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Outlet />
          <Toaster richColors position="top-right" />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
