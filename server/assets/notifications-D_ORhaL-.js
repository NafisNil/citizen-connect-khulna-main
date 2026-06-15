import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Button } from "./button-B941vxFk.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Bell, CheckCheck } from "lucide-react";
//#region src/routes/_authenticated/notifications.tsx?tsr-split=component
function NotificationsPage() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["notifications"],
		queryFn: async () => {
			const { data, error } = await supabase.from("notifications").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const markRead = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-3xl space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "font-display text-2xl font-bold sm:text-3xl",
				children: "নোটিফিকেশন"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "আপনার সকল আপডেট ও বার্তা"
			})] }),
			isLoading && /* @__PURE__ */ jsx("div", {
				className: "text-sm text-muted-foreground",
				children: "লোড হচ্ছে..."
			}),
			!isLoading && (data?.length ?? 0) === 0 && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
				className: "py-16 text-center",
				children: [
					/* @__PURE__ */ jsx(Bell, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 font-medium",
						children: "কোনো নোটিফিকেশন নেই"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "নতুন আপডেট এলে এখানে দেখাবে।"
					})
				]
			}) }),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: data?.map((n) => /* @__PURE__ */ jsx(Card, {
					className: n.is_read ? "" : "border-l-4 border-l-accent",
					children: /* @__PURE__ */ jsxs(CardContent, {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 p-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [!n.is_read && /* @__PURE__ */ jsx("span", { className: "h-2 w-2 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ jsx("div", {
										className: "font-medium",
										children: n.title
									})]
								}),
								n.body && /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: n.body
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-2 text-xs text-muted-foreground",
									children: new Date(n.created_at).toLocaleString("bn-BD")
								})
							]
						}), !n.is_read && /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => markRead.mutate(n.id),
							children: /* @__PURE__ */ jsx(CheckCheck, { className: "h-4 w-4" })
						})]
					})
				}, n.id))
			})
		]
	});
}
//#endregion
export { NotificationsPage as component };
