import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as useAuth } from "./auth-context--8-xSqHB.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
//#region src/routes/_authenticated/profile.tsx?tsr-split=component
function ProfilePage() {
	const { user } = useAuth();
	const qc = useQueryClient();
	const [editing, setEditing] = useState(false);
	const { data: profile, isLoading } = useQuery({
		queryKey: ["profile", user?.id],
		queryFn: async () => {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
			if (error) throw error;
			return data;
		},
		enabled: !!user
	});
	const mut = useMutation({
		mutationFn: async (vals) => {
			const { error } = await supabase.from("profiles").update(vals).eq("id", user.id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["profile"] });
			toast.success("প্রোফাইল আপডেট হয়েছে");
			setEditing(false);
		},
		onError: (e) => toast.error(e.message)
	});
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "text-sm text-muted-foreground",
		children: "লোড হচ্ছে..."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-3xl space-y-6",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
			className: "font-display text-2xl font-bold sm:text-3xl",
			children: "প্রোফাইল"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "আপনার ব্যক্তিগত তথ্যাদি দেখুন ও সম্পাদনা করুন।"
		})] }), /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
			className: "p-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-2xl font-bold text-primary-foreground",
						children: (profile?.full_name?.[0] ?? "U").toUpperCase()
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate font-display text-lg font-semibold",
							children: profile?.full_name
						}), /* @__PURE__ */ jsx("div", {
							className: "truncate text-sm text-muted-foreground",
							children: user?.email
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ml-auto",
						children: !editing && /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setEditing(true),
							children: "সম্পাদনা"
						})
					})
				]
			}), /* @__PURE__ */ jsxs("form", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				onSubmit: (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					mut.mutate({
						full_name: String(fd.get("full_name") || "").trim(),
						full_name_bn: String(fd.get("full_name_bn") || "").trim() || null,
						phone: String(fd.get("phone") || "").trim() || null,
						nid: String(fd.get("nid") || "").trim() || null,
						ward_no: fd.get("ward_no") ? Number(fd.get("ward_no")) : null,
						address: String(fd.get("address") || "").trim() || null
					});
				},
				children: [
					/* @__PURE__ */ jsx(Field, {
						name: "full_name",
						label: "পূর্ণ নাম (ইংরেজি)",
						defaultValue: profile?.full_name ?? "",
						editing
					}),
					/* @__PURE__ */ jsx(Field, {
						name: "full_name_bn",
						label: "পূর্ণ নাম (বাংলা)",
						defaultValue: profile?.full_name_bn ?? "",
						editing
					}),
					/* @__PURE__ */ jsx(Field, {
						name: "phone",
						label: "মোবাইল",
						defaultValue: profile?.phone ?? "",
						editing
					}),
					/* @__PURE__ */ jsx(Field, {
						name: "nid",
						label: "জাতীয় পরিচয়পত্র",
						defaultValue: profile?.nid ?? "",
						editing
					}),
					/* @__PURE__ */ jsx(Field, {
						name: "ward_no",
						label: "ওয়ার্ড নং",
						type: "number",
						defaultValue: String(profile?.ward_no ?? ""),
						editing
					}),
					/* @__PURE__ */ jsx(Field, {
						name: "address",
						label: "ঠিকানা",
						defaultValue: profile?.address ?? "",
						editing,
						className: "sm:col-span-2"
					}),
					editing && /* @__PURE__ */ jsxs("div", {
						className: "flex gap-2 sm:col-span-2",
						children: [/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: [mut.isPending && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " সংরক্ষণ করুন"]
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setEditing(false),
							children: "বাতিল"
						})]
					})
				]
			})]
		}) })]
	});
}
function Field({ name, label, defaultValue, editing, type = "text", className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [/* @__PURE__ */ jsx("label", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), editing ? /* @__PURE__ */ jsx(Input, {
			name,
			type,
			defaultValue,
			className: "mt-1"
		}) : /* @__PURE__ */ jsx("div", {
			className: "mt-1 rounded-md border bg-secondary/40 px-3 py-2 text-sm",
			children: defaultValue || "—"
		})]
	});
}
//#endregion
export { ProfilePage as component };
