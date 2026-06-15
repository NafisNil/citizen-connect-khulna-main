import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
//#region src/routes/forgot-password.tsx?tsr-split=component
function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [busy, setBusy] = useState(false);
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-secondary/30 px-4",
		children: /* @__PURE__ */ jsx(Card, {
			className: "w-full max-w-md shadow-[var(--shadow-elegant)]",
			children: /* @__PURE__ */ jsxs(CardContent, {
				className: "p-8",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/auth",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " লগইন পেজে ফিরুন"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-2xl font-bold",
						children: "পাসওয়ার্ড পুনরুদ্ধার"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "আপনার ইমেইল ঠিকানা দিন। আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব।"
					}),
					sent ? /* @__PURE__ */ jsx("div", {
						className: "mt-6 rounded-lg border border-success/30 bg-success/10 p-4 text-sm text-success",
						children: "যদি অ্যাকাউন্ট থাকে, পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে।"
					}) : /* @__PURE__ */ jsxs("form", {
						className: "mt-6 space-y-4",
						onSubmit: async (e) => {
							e.preventDefault();
							setBusy(true);
							const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + "/reset-password" });
							setBusy(false);
							if (error) return toast.error(error.message);
							setSent(true);
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "ইমেইল"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }), /* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: [busy && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " রিসেট লিংক পাঠান"]
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { ForgotPassword as component };
