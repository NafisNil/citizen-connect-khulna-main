import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
//#region src/routes/reset-password.tsx?tsr-split=component
function ResetPassword() {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [busy, setBusy] = useState(false);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-secondary/30 px-4",
		children: /* @__PURE__ */ jsx(Card, {
			className: "w-full max-w-md shadow-[var(--shadow-elegant)]",
			children: /* @__PURE__ */ jsxs(CardContent, {
				className: "p-8",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-2xl font-bold",
						children: "নতুন পাসওয়ার্ড সেট করুন"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "কমপক্ষে ৮ অক্ষরের একটি শক্তিশালী পাসওয়ার্ড দিন।"
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "mt-6 space-y-4",
						onSubmit: async (e) => {
							e.preventDefault();
							if (password.length < 8) return toast.error("কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন");
							setBusy(true);
							const { error } = await supabase.auth.updateUser({ password });
							setBusy(false);
							if (error) return toast.error(error.message);
							toast.success("পাসওয়ার্ড আপডেট হয়েছে");
							navigate({ to: "/dashboard" });
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "নতুন পাসওয়ার্ড"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							minLength: 8
						})] }), /* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: [busy && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " পাসওয়ার্ড আপডেট করুন"]
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { ResetPassword as component };
