import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Badge } from "./badge-D1Dupn2y.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { FileText } from "lucide-react";
//#region src/routes/_authenticated/applications.tsx?tsr-split=component
var typeLabel = {
	trade_license_new: "ট্রেড লাইসেন্স (নতুন)",
	trade_license_renewal: "ট্রেড লাইসেন্স নবায়ন",
	auto_rickshaw_registration: "অটোরিকশা নিবন্ধন",
	birth_certificate: "জন্ম সনদ",
	death_certificate: "মৃত্যু সনদ",
	holding_tax: "হোল্ডিং কর"
};
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
function ApplicationsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["applications"],
		queryFn: async () => {
			const { data, error } = await supabase.from("applications").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "font-display text-2xl font-bold sm:text-3xl",
				children: "আবেদনসমূহ"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "আপনার সকল জমাকৃত আবেদন"
			})] }),
			isLoading && /* @__PURE__ */ jsx("div", {
				className: "text-sm text-muted-foreground",
				children: "লোড হচ্ছে..."
			}),
			!isLoading && (data?.length ?? 0) === 0 && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
				className: "py-16 text-center",
				children: [
					/* @__PURE__ */ jsx(FileText, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 font-medium",
						children: "এখনো কোনো আবেদন নেই"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "ড্যাশবোর্ড থেকে নতুন সেবার জন্য আবেদন করুন।"
					})
				]
			}) }),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: data?.map((a) => {
					const s = statusLabel[a.status] ?? {
						text: a.status,
						tone: "secondary"
					};
					return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "truncate font-medium",
								children: typeLabel[a.type] ?? a.type
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ jsxs("span", { children: ["ট্র্যাকিং: ", /* @__PURE__ */ jsx("span", {
									className: "font-mono text-foreground",
									children: a.tracking_no
								})] }), /* @__PURE__ */ jsx("span", { children: new Date(a.created_at).toLocaleDateString("bn-BD") })]
							})]
						}), /* @__PURE__ */ jsx(Badge, {
							variant: s.tone,
							children: s.text
						})]
					}) }, a.id);
				})
			})
		]
	});
}
//#endregion
export { ApplicationsPage as component };
