import { t as supabase } from "./client-DVI0JNbQ.js";
import { n as useAuth } from "./auth-context--8-xSqHB.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import { createLovableAuth } from "@lovable.dev/cloud-auth-js";
import * as TabsPrimitive from "@radix-ui/react-tabs";
//#region src/integrations/lovable/index.ts
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsPrimitive.Content.displayName;
//#endregion
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const { mode } = useSearch({ from: "/auth" });
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		if (!loading && user) navigate({ to: "/dashboard" });
	}, [
		user,
		loading,
		navigate
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid min-h-dvh lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative hidden bg-[image:var(--gradient-hero)] p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " হোমে ফিরুন"]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary-foreground/20 backdrop-blur",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-2xl font-bold",
							children: "খু"
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-display text-4xl font-bold leading-tight",
						children: "খুলনা নাগরিক সেবা প্ল্যাটফর্মে স্বাগতম"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-md text-primary-foreground/85",
						children: "একটি অ্যাকাউন্ট দিয়ে সকল সেবা — ট্রেড লাইসেন্স, জন্ম সনদ, হোল্ডিং কর, অভিযোগ — এক জায়গায়।"
					})
				] }),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs opacity-70",
					children: "© খুলনা সিটি কর্পোরেশন"
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-6 sm:p-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:hidden",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " হোম"]
					})
				}), /* @__PURE__ */ jsxs(Tabs, {
					defaultValue: mode === "signup" ? "signup" : "login",
					className: "mt-6",
					children: [
						/* @__PURE__ */ jsxs(TabsList, {
							className: "grid w-full grid-cols-2",
							children: [/* @__PURE__ */ jsx(TabsTrigger, {
								value: "login",
								children: "লগইন"
							}), /* @__PURE__ */ jsx(TabsTrigger, {
								value: "signup",
								children: "নিবন্ধন"
							})]
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "login",
							children: /* @__PURE__ */ jsx(LoginForm, {})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "signup",
							children: /* @__PURE__ */ jsx(SignupForm, {})
						})
					]
				})]
			})
		})]
	});
}
function GoogleButton() {
	const [busy, setBusy] = useState(false);
	return /* @__PURE__ */ jsxs(Button, {
		type: "button",
		variant: "outline",
		className: "w-full",
		disabled: busy,
		onClick: async () => {
			setBusy(true);
			if ((await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/dashboard" })).error) {
				toast.error("গুগল লগইন ব্যর্থ হয়েছে");
				setBusy(false);
			}
		},
		children: [busy ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			className: "h-4 w-4",
			children: [
				/* @__PURE__ */ jsx("path", {
					fill: "#4285F4",
					d: "M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-8z"
				}),
				/* @__PURE__ */ jsx("path", {
					fill: "#34A853",
					d: "M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .6-2.2 1-3.8 1-3 0-5.4-2-6.3-4.7H2v3a11 11 0 0 0 10 6.1z"
				}),
				/* @__PURE__ */ jsx("path", {
					fill: "#FBBC05",
					d: "M5.7 13.9a6.6 6.6 0 0 1 0-4.2v-3H2a11 11 0 0 0 0 10.2l3.7-3z"
				}),
				/* @__PURE__ */ jsx("path", {
					fill: "#EA4335",
					d: "M12 5.4c1.7 0 3.2.6 4.4 1.7L19.5 4A11 11 0 0 0 2 6.7l3.7 3C6.6 7.3 9 5.4 12 5.4z"
				})
			]
		}), "Google দিয়ে চালিয়ে যান"]
	});
}
function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [busy, setBusy] = useState(false);
	return /* @__PURE__ */ jsx(Card, {
		className: "mt-4 border-0 shadow-none",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "space-y-4 p-0 pt-4",
			children: [
				/* @__PURE__ */ jsx(GoogleButton, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative text-center text-xs text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "bg-background px-2",
						children: "অথবা ইমেইল দিয়ে"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-1/2 -z-10 h-px bg-border" })]
				}),
				/* @__PURE__ */ jsxs("form", {
					className: "space-y-4",
					onSubmit: async (e) => {
						e.preventDefault();
						setBusy(true);
						const { error } = await supabase.auth.signInWithPassword({
							email,
							password
						});
						setBusy(false);
						if (error) return toast.error(error.message);
						toast.success("সফলভাবে লগইন হয়েছে");
						navigate({ to: "/dashboard" });
					},
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "ইমেইল"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium",
								children: "পাসওয়ার্ড"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/forgot-password",
								className: "text-xs text-primary hover:underline",
								children: "পাসওয়ার্ড ভুলে গেছেন?"
							})]
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})] }),
						/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: [busy && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " লগইন করুন"]
						})
					]
				})
			]
		})
	});
}
function SignupForm() {
	const navigate = useNavigate();
	const [busy, setBusy] = useState(false);
	return /* @__PURE__ */ jsx(Card, {
		className: "mt-4 border-0 shadow-none",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "space-y-4 p-0 pt-4",
			children: [
				/* @__PURE__ */ jsx(GoogleButton, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative text-center text-xs text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "bg-background px-2",
						children: "অথবা ফর্ম পূরণ করুন"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-1/2 -z-10 h-px bg-border" })]
				}),
				/* @__PURE__ */ jsxs("form", {
					className: "space-y-3",
					onSubmit: async (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const full_name = String(fd.get("full_name") || "").trim();
						const phone = String(fd.get("phone") || "").trim();
						const email = String(fd.get("email") || "").trim();
						const password = String(fd.get("password") || "");
						const parsed = z.object({
							full_name: z.string().min(2, "নাম দিন").max(100),
							phone: z.string().regex(/^01\d{9}$/, "সঠিক মোবাইল নম্বর দিন"),
							email: z.string().email("সঠিক ইমেইল দিন").max(255),
							password: z.string().min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের")
						}).safeParse({
							full_name,
							phone,
							email,
							password
						});
						if (!parsed.success) return toast.error(parsed.error.issues[0].message);
						setBusy(true);
						const { error } = await supabase.auth.signUp({
							email,
							password,
							options: {
								emailRedirectTo: window.location.origin + "/dashboard",
								data: {
									full_name,
									phone
								}
							}
						});
						setBusy(false);
						if (error) return toast.error(error.message);
						toast.success("নিবন্ধন সফল! ইমেইল যাচাই করতে পারেন।");
						navigate({ to: "/dashboard" });
					},
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "পূর্ণ নাম"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							name: "full_name",
							required: true,
							placeholder: "মোঃ রহিম উদ্দিন"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "মোবাইল"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							name: "phone",
							required: true,
							placeholder: "০১৭xxxxxxxx"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium",
							children: "ইমেইল"
						}), /* @__PURE__ */ jsx(Input, {
							className: "mt-1.5",
							name: "email",
							type: "email",
							required: true
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium",
								children: "পাসওয়ার্ড"
							}),
							/* @__PURE__ */ jsx(Input, {
								className: "mt-1.5",
								name: "password",
								type: "password",
								required: true,
								minLength: 8
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন"
							})
						] }),
						/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							variant: "accent",
							className: "w-full mt-2",
							disabled: busy,
							children: [busy && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " অ্যাকাউন্ট তৈরি করুন"]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-center text-xs text-muted-foreground",
							children: [
								"নিবন্ধন করার মাধ্যমে আপনি আমাদের",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-primary hover:underline",
									children: "ব্যবহারের শর্ত"
								}),
								" মেনে নিচ্ছেন।"
							]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
