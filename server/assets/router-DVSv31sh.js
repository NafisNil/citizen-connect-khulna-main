import { t as supabase } from "./client-DVI0JNbQ.js";
import { t as AuthProvider } from "./auth-context--8-xSqHB.js";
import { t as ThemeProvider } from "./theme-provider-Dt6v-1lG.js";
import { useEffect } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { z } from "zod";
//#region src/styles.css?url
var styles_default = "/citizen-connect-khulna-main/assets/styles-CwDbotjH.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-primary",
					children: "৪০৪"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "পেজটি খুঁজে পাওয়া যায়নি"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "আপনি যে পেজটি খুঁজছেন তা সরিয়ে নেওয়া হয়েছে বা বিদ্যমান নেই।"
				}),
				/* @__PURE__ */ jsx("a", {
					href: "/citizen-connect-khulna-main/",
					className: "mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90",
					children: "হোমে ফিরুন"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "পেজটি লোড হয়নি"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "একটি সমস্যা হয়েছে। অনুগ্রহ করে পুনরায় চেষ্টা করুন।"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground",
						children: "পুনরায় চেষ্টা করুন"
					}), /* @__PURE__ */ jsx("a", {
						href: "/citizen-connect-khulna-main/",
						className: "inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm",
						children: "হোম"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "খুলনা নাগরিক সেবা — Khulna Citizen Services" },
			{
				name: "description",
				content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।"
			},
			{
				name: "author",
				content: "Khulna City Corporation"
			},
			{
				property: "og:title",
				content: "খুলনা নাগরিক সেবা — Khulna Citizen Services"
			},
			{
				property: "og:description",
				content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "খুলনা নাগরিক সেবা — Khulna Citizen Services"
			},
			{
				name: "twitter:description",
				content: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর ও আরও অনেক সেবা।"
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6670b9a-648b-4ee5-987d-6f53e9c66610/id-preview-996ab32e--961cf7cd-4005-4ceb-84c1-bbb4811bdd7a.lovable.app-1781464513634.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6670b9a-648b-4ee5-987d-6f53e9c66610/id-preview-996ab32e--961cf7cd-4005-4ceb-84c1-bbb4811bdd7a.lovable.app-1781464513634.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Noto+Serif+Bengali:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "bn",
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx("base", { href: "/citizen-connect-khulna-main/" }), /* @__PURE__ */ jsx(HeadContent, {})] }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsxs(AuthProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster$1, {
			richColors: true,
			position: "top-right"
		})] }) })
	});
}
//#endregion
//#region src/routes/reset-password.tsx
var $$splitComponentImporter$9 = () => import("./reset-password-BX3Vj0Gy.js");
var Route$9 = createFileRoute("/reset-password")({
	head: () => ({ meta: [{ title: "নতুন পাসওয়ার্ড সেট করুন" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/forgot-password.tsx
var $$splitComponentImporter$8 = () => import("./forgot-password-CJ8c19ZU.js");
var Route$8 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "পাসওয়ার্ড পুনরুদ্ধার — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$7 = () => import("./auth-ZQyAQsPL.js");
var searchSchema = z.object({ mode: z.enum(["login", "signup"]).optional() });
var Route$7 = createFileRoute("/auth")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "লগইন / নিবন্ধন — খুলনা নাগরিক সেবা" }, {
		name: "description",
		content: "নাগরিক সেবা ব্যবহার করতে লগইন করুন বা নতুন অ্যাকাউন্ট তৈরি করুন।"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/_authenticated/route.tsx
var $$splitComponentImporter$6 = () => import("./route-BC3PJTlC.js");
var Route$6 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-CE8pBXD1.js");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "খুলনা নাগরিক সেবা — Khulna City Corporation Citizen Services" },
		{
			name: "description",
			content: "ট্রেড লাইসেন্স, জন্ম ও মৃত্যু সনদ, হোল্ডিং কর, অটোরিকশা নিবন্ধন এবং অভিযোগ — সকল নাগরিক সেবা এখন অনলাইনে।"
		},
		{
			property: "og:title",
			content: "খুলনা নাগরিক সেবা"
		},
		{
			property: "og:description",
			content: "ঘরে বসে খুলনা সিটি কর্পোরেশনের সকল নাগরিক সেবা গ্রহণ করুন।"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/_authenticated/profile.tsx
var $$splitComponentImporter$4 = () => import("./profile-nEwVE_dj.js");
var Route$4 = createFileRoute("/_authenticated/profile")({
	head: () => ({ meta: [{ title: "প্রোফাইল — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/_authenticated/notifications.tsx
var $$splitComponentImporter$3 = () => import("./notifications-D_ORhaL-.js");
var Route$3 = createFileRoute("/_authenticated/notifications")({
	head: () => ({ meta: [{ title: "নোটিফিকেশন — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/_authenticated/dashboard.tsx
var $$splitComponentImporter$2 = () => import("./dashboard-Bkuwzi5N.js");
var Route$2 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [{ title: "ড্যাশবোর্ড — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/_authenticated/complaints.tsx
var $$splitComponentImporter$1 = () => import("./complaints-QFzWF82u.js");
var Route$1 = createFileRoute("/_authenticated/complaints")({
	head: () => ({ meta: [{ title: "অভিযোগ — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_authenticated/applications.tsx
var $$splitComponentImporter = () => import("./applications-jjmSMWWJ.js");
var Route = createFileRoute("/_authenticated/applications")({
	head: () => ({ meta: [{ title: "আবেদনসমূহ — খুলনা নাগরিক সেবা" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var ResetPasswordRoute = Route$9.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$10
});
var ForgotPasswordRoute = Route$8.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$10
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$10
});
var AuthenticatedRouteRoute = Route$6.update({
	id: "/_authenticated",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AuthenticatedProfileRoute = Route$4.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedNotificationsRoute = Route$3.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedComplaintsRoute = Route$1.update({
	id: "/complaints",
	path: "/complaints",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedApplicationsRoute: Route.update({
		id: "/applications",
		path: "/applications",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedComplaintsRoute,
	AuthenticatedDashboardRoute,
	AuthenticatedNotificationsRoute,
	AuthenticatedProfileRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	ForgotPasswordRoute,
	ResetPasswordRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
