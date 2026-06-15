import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as useAuth } from "./auth-context--8-xSqHB.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Badge } from "./badge-D1Dupn2y.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Textarea } from "./textarea-kko37XEX.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2, MessageSquareWarning, Plus, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/routes/_authenticated/complaints.tsx?tsr-split=component
var statusLabel = {
	open: {
		text: "নতুন",
		tone: "secondary"
	},
	in_progress: {
		text: "প্রক্রিয়াধীন",
		tone: "default"
	},
	resolved: {
		text: "সমাধান হয়েছে",
		tone: "default"
	},
	closed: {
		text: "বন্ধ",
		tone: "secondary"
	}
};
function ComplaintsPage() {
	const { user } = useAuth();
	const qc = useQueryClient();
	const [open, setOpen] = useState(false);
	const { data, isLoading } = useQuery({
		queryKey: ["complaints"],
		queryFn: async () => {
			const { data, error } = await supabase.from("complaints").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const mut = useMutation({
		mutationFn: async (vals) => {
			const { error } = await supabase.from("complaints").insert({
				user_id: user.id,
				...vals
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("অভিযোগ জমা হয়েছে");
			qc.invalidateQueries({ queryKey: ["complaints"] });
			setOpen(false);
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "font-display text-2xl font-bold sm:text-3xl",
						children: "অভিযোগ"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "আপনার দায়েরকৃত সকল অভিযোগ"
					})]
				}), /* @__PURE__ */ jsxs(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "accent",
							children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " নতুন অভিযোগ"]
						})
					}), /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "নতুন অভিযোগ দায়ের" }) }), /* @__PURE__ */ jsxs("form", {
						className: "space-y-3",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							const w = fd.get("ward_no");
							mut.mutate({
								category: String(fd.get("category") || "").trim() || "সাধারণ",
								subject: String(fd.get("subject") || "").trim(),
								description: String(fd.get("description") || "").trim(),
								location: String(fd.get("location") || "").trim(),
								ward_no: w ? Number(w) : null
							});
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "text-sm font-medium",
									children: "ক্যাটাগরি"
								}), /* @__PURE__ */ jsx(Input, {
									name: "category",
									placeholder: "যেমন: পানি, রাস্তা, পরিচ্ছন্নতা"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "text-sm font-medium",
									children: "ওয়ার্ড"
								}), /* @__PURE__ */ jsx(Input, {
									name: "ward_no",
									type: "number",
									min: 1,
									max: 31,
									placeholder: "১-৩১"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium",
								children: "বিষয়"
							}), /* @__PURE__ */ jsx(Input, {
								name: "subject",
								required: true,
								maxLength: 150
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium",
								children: "অবস্থান"
							}), /* @__PURE__ */ jsx(Input, {
								name: "location",
								placeholder: "রাস্তা/এলাকা"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium",
								children: "বিবরণ"
							}), /* @__PURE__ */ jsx(Textarea, {
								name: "description",
								required: true,
								rows: 4,
								maxLength: 1e3
							})] }),
							/* @__PURE__ */ jsxs(Button, {
								type: "submit",
								className: "w-full",
								disabled: mut.isPending,
								children: [mut.isPending && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " অভিযোগ জমা দিন"]
							})
						]
					})] })]
				})]
			}),
			isLoading && /* @__PURE__ */ jsx("div", {
				className: "text-sm text-muted-foreground",
				children: "লোড হচ্ছে..."
			}),
			!isLoading && (data?.length ?? 0) === 0 && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
				className: "py-16 text-center",
				children: [
					/* @__PURE__ */ jsx(MessageSquareWarning, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 font-medium",
						children: "কোনো অভিযোগ নেই"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "\"নতুন অভিযোগ\" বাটনে ক্লিক করে অভিযোগ দায়ের করুন।"
					})
				]
			}) }),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: data?.map((c) => {
					const s = statusLabel[c.status] ?? {
						text: c.status,
						tone: "secondary"
					};
					return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, {
						className: "p-5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", {
											className: "rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground",
											children: c.category
										}), /* @__PURE__ */ jsx("span", {
											className: "font-mono",
											children: c.tracking_no
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-2 font-medium",
										children: c.subject
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
										children: c.description
									})
								]
							}), /* @__PURE__ */ jsx(Badge, {
								variant: s.tone,
								children: s.text
							})]
						})
					}) }, c.id);
				})
			})
		]
	});
}
//#endregion
export { ComplaintsPage as component };
