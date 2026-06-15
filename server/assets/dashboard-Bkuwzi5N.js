import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Badge } from "./badge-D1Dupn2y.js";
import { t as Button } from "./button-B941vxFk.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Baby, Bike, Building2, CheckCircle2, Clock, FileText, MessageSquareWarning, Receipt } from "lucide-react";
//#region src/routes/_authenticated/dashboard.tsx?tsr-split=component
var statusLabel = {
	submitted: {
		text: "জমা হয়েছে",
		tone: "secondary"
	},
	under_review: {
		text: "পর্যালোচনাধীন",
		tone: "default"
	},
	approved: {
		text: "অনুমোদিত",
		tone: "default"
	},
	rejected: {
		text: "বাতিল",
		tone: "destructive"
	},
	completed: {
		text: "সম্পন্ন",
		tone: "default"
	}
};
var quickServices = [
	{
		icon: Building2,
		label: "ট্রেড লাইসেন্স"
	},
	{
		icon: Baby,
		label: "জন্ম সনদ"
	},
	{
		icon: Receipt,
		label: "হোল্ডিং কর"
	},
	{
		icon: Bike,
		label: "অটোরিকশা"
	}
];
function Dashboard() {
	const apps = useQuery({
		queryKey: ["my-applications"],
		queryFn: async () => {
			const { data, error } = await supabase.from("applications").select("id, tracking_no, type, status, created_at").order("created_at", { ascending: false }).limit(5);
			if (error) throw error;
			return data;
		}
	});
	const complaints = useQuery({
		queryKey: ["my-complaints-count"],
		queryFn: async () => {
			const { count, error } = await supabase.from("complaints").select("*", {
				count: "exact",
				head: true
			});
			if (error) throw error;
			return count ?? 0;
		}
	});
	const list = apps.data ?? [];
	const cards = [
		{
			label: "মোট আবেদন",
			value: list.length,
			icon: FileText,
			color: "text-primary bg-primary/10"
		},
		{
			label: "প্রক্রিয়াধীন",
			value: list.filter((a) => a.status === "submitted" || a.status === "under_review").length,
			icon: Clock,
			color: "text-warning-foreground bg-warning/20"
		},
		{
			label: "সম্পন্ন",
			value: list.filter((a) => a.status === "approved" || a.status === "completed").length,
			icon: CheckCircle2,
			color: "text-success bg-success/10"
		},
		{
			label: "অভিযোগ",
			value: complaints.data ?? 0,
			icon: MessageSquareWarning,
			color: "text-accent bg-accent/10"
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "font-display text-2xl font-bold sm:text-3xl",
				children: "ড্যাশবোর্ড"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "আপনার সকল আবেদন ও কার্যক্রম এক নজরে"
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map((c) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
					className: "flex items-center gap-4 p-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.color}`,
						children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-2xl font-bold",
							children: c.value
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: c.label
						})]
					})]
				}) }, c.label))
			}),
			/* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
				className: "p-5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-4 text-sm font-semibold",
					children: "দ্রুত সেবা"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: quickServices.map((s) => /* @__PURE__ */ jsxs("button", {
						className: "group flex items-center gap-3 rounded-xl border bg-background p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex-1 text-sm font-medium",
								children: s.label
							}),
							/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" })
						]
					}, s.label))
				})]
			}) }),
			/* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
				className: "p-5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold",
							children: "সাম্প্রতিক আবেদন"
						}), /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/applications",
								children: ["সব দেখুন ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						})]
					}),
					apps.isLoading && /* @__PURE__ */ jsx("div", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "লোড হচ্ছে..."
					}),
					!apps.isLoading && list.length === 0 && /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-dashed py-10 text-center",
						children: [
							/* @__PURE__ */ jsx(FileText, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3 font-medium",
								children: "এখনো কোনো আবেদন নেই"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "নতুন আবেদন শুরু করতে উপরের সেবা নির্বাচন করুন।"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: list.map((a) => {
							const s = statusLabel[a.status] ?? {
								text: a.status,
								tone: "secondary"
							};
							return /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-background p-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "truncate text-sm font-medium",
										children: a.type.replace(/_/g, " ")
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: ["ট্র্যাকিং: ", /* @__PURE__ */ jsx("span", {
											className: "font-mono",
											children: a.tracking_no
										})]
									})]
								}), /* @__PURE__ */ jsx(Badge, {
									variant: s.tone,
									children: s.text
								})]
							}, a.id);
						})
					})
				]
			}) })
		]
	});
}
//#endregion
export { Dashboard as component };
