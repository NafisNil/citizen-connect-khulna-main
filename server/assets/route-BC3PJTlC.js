import { n as useAuth } from "./auth-context--8-xSqHB.js";
import { n as useTheme } from "./theme-provider-Dt6v-1lG.js";
import { t as Button } from "./button-B941vxFk.js";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Bell, FileText, Home, LayoutDashboard, LogOut, MessageSquareWarning, Moon, Sun, User } from "lucide-react";
//#region src/routes/_authenticated/route.tsx?tsr-split=component
var navItems = [
	{
		to: "/dashboard",
		icon: LayoutDashboard,
		label: "ড্যাশবোর্ড"
	},
	{
		to: "/applications",
		icon: FileText,
		label: "আবেদনসমূহ"
	},
	{
		to: "/complaints",
		icon: MessageSquareWarning,
		label: "অভিযোগ"
	},
	{
		to: "/notifications",
		icon: Bell,
		label: "নোটিফিকেশন"
	},
	{
		to: "/profile",
		icon: User,
		label: "প্রোফাইল"
	}
];
function AuthenticatedLayout() {
	const { user, signOut } = useAuth();
	const { theme, toggle } = useTheme();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-dvh w-full bg-secondary/30",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "hidden w-64 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground lg:flex",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-base font-bold",
							children: "খু"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate text-sm font-bold",
							children: "খুলনা নাগরিক সেবা"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-wider opacity-70",
							children: "Dashboard"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "flex-1 space-y-1 p-3",
					children: navItems.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-accent text-accent-foreground" : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`,
							children: [/* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }), item.label]
						}, item.to);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-t border-sidebar-border p-3",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/85 hover:bg-sidebar-accent",
						children: [/* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }), " ওয়েবসাইটে ফিরুন"]
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b bg-background px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: "স্বাগতম"
						}), /* @__PURE__ */ jsx("div", {
							className: "truncate text-sm font-semibold",
							children: user?.email
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							onClick: toggle,
							"aria-label": "theme",
							children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							onClick: async () => {
								await signOut();
								navigate({ to: "/" });
							},
							children: [
								/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: "লগ আউট"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "flex gap-1 overflow-x-auto border-b bg-background px-3 py-2 lg:hidden",
					children: navItems.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							className: `flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
							children: [
								/* @__PURE__ */ jsx(item.icon, { className: "h-3.5 w-3.5" }),
								" ",
								item.label
							]
						}, item.to);
					})
				}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1 p-4 sm:p-6 lg:p-8",
					children: /* @__PURE__ */ jsx(Outlet, {})
				})
			]
		})]
	});
}
//#endregion
export { AuthenticatedLayout as component };
