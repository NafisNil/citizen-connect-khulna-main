import { n as useAuth } from "./auth-context--8-xSqHB.js";
import { n as useTheme } from "./theme-provider-Dt6v-1lG.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { n as CardContent, t as Card } from "./card-CH7CIgFY.js";
import { t as Badge } from "./badge-D1Dupn2y.js";
import { t as Button } from "./button-B941vxFk.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Textarea } from "./textarea-kko37XEX.js";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Ambulance, ArrowRight, Baby, Bike, Building2, Check, ChevronDown, ChevronRight, Circle, Clock, Facebook, FileCheck2, FileHeart, FileText, Flame, LayoutDashboard, LogOut, Mail, MapPin, Menu, Moon, Phone, Receipt, Search, ShieldAlert, ShieldCheck, Sun, Twitter, Users, Youtube } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
//#region src/assets/khulna-hero.jpg
var khulna_hero_default = "/citizen-connect-khulna-main/assets/khulna-hero-IMdMON6J.jpg";
//#endregion
//#region src/components/ui/dropdown-menu.tsx
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
//#endregion
//#region src/components/site-header.tsx
var nav = [
	{
		to: "/",
		label: "হোম"
	},
	{
		to: "/#services",
		label: "সেবাসমূহ"
	},
	{
		to: "/#notices",
		label: "নোটিশ"
	},
	{
		to: "/#faq",
		label: "প্রশ্নোত্তর"
	},
	{
		to: "/#contact",
		label: "যোগাযোগ"
	}
];
function SiteHeader() {
	const { user, signOut } = useAuth();
	const { theme, toggle } = useTheme();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const base = "/citizen-connect-khulna-main/";
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-lg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: base,
					className: "flex shrink-0 items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]",
						children: /* @__PURE__ */ jsx("img", {
							src: "/citizen-connect-khulna-main/khulan_logo.png",
							alt: "খুলনা লোগো",
							className: "h-8 w-8 rounded-md object-contain"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "truncate text-sm font-bold leading-tight",
							children: "খুলনা নাগরিক সেবা"
						}), /* @__PURE__ */ jsx("div", {
							className: "hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block",
							children: "Khulna Citizen Services"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "ml-6 hidden items-center gap-1 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ jsx("a", {
						href: base + n.to.replace(/^\//, ""),
						className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							onClick: toggle,
							"aria-label": theme === "dark" ? "লাইট মোড" : "ডার্ক মোড",
							children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
						}),
						user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								className: "gap-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
									children: (user.email?.[0] ?? "U").toUpperCase()
								}), /* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: "আমার অ্যাকাউন্ট"
								})]
							})
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							children: [
								/* @__PURE__ */ jsxs(DropdownMenuItem, {
									onClick: () => navigate({ to: "/dashboard" }),
									children: [/* @__PURE__ */ jsx(LayoutDashboard, { className: "mr-2 h-4 w-4" }), " ড্যাশবোর্ড"]
								}),
								/* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => navigate({ to: "/profile" }),
									children: "প্রোফাইল"
								}),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
								/* @__PURE__ */ jsxs(DropdownMenuItem, {
									onClick: async () => {
										await signOut();
										navigate({ to: "/" });
									},
									children: [/* @__PURE__ */ jsx(LogOut, { className: "mr-2 h-4 w-4" }), " লগ আউট"]
								})
							]
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/auth",
								children: "লগইন"
							})
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							variant: "accent",
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/auth",
								search: { mode: "signup" },
								children: "নিবন্ধন"
							})
						})] }),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setOpen((o) => !o),
							"aria-label": "মেনু",
							children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t bg-background lg:hidden",
			children: /* @__PURE__ */ jsx("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-4 py-2",
				children: nav.map((n) => /* @__PURE__ */ jsx("a", {
					href: base + n.to.replace(/^\//, ""),
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: n.label
				}, n.to))
			})
		})]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-20 border-t bg-sidebar text-sidebar-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ jsx("img", {
								src: "/citizen-connect-khulna-main/khulan_logo.png",
								alt: "খুলনা লোগো",
								className: "h-8 w-8 rounded-md object-contain"
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-sm font-bold",
							children: "খুলনা নাগরিক সেবা"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-wider opacity-70",
							children: "Khulna Citizen Services"
						})] })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm leading-relaxed opacity-80",
						children: "খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ঘরে বসে দ্রুত ও নিরাপদে সকল সেবা গ্রহণ করুন।"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex gap-3",
						children: [
							Facebook,
							Youtube,
							Twitter
						].map((Icon, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-full bg-sidebar-accent transition-colors hover:bg-accent hover:text-accent-foreground",
							"aria-label": "social",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold",
					children: "দ্রুত লিংক"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2.5 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/citizen-connect-khulna-main/#services",
							className: "hover:opacity-100 hover:underline",
							children: "সকল সেবা"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/citizen-connect-khulna-main/#notices",
							className: "hover:opacity-100 hover:underline",
							children: "নোটিশ"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/citizen-connect-khulna-main/auth",
							className: "hover:opacity-100 hover:underline",
							children: "নিবন্ধন"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/citizen-connect-khulna-main/#faq",
							className: "hover:opacity-100 hover:underline",
							children: "সাধারণ প্রশ্ন"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold",
					children: "সেবাসমূহ"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2.5 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: "ট্রেড লাইসেন্স" }),
						/* @__PURE__ */ jsx("li", { children: "জন্ম ও মৃত্যু সনদ" }),
						/* @__PURE__ */ jsx("li", { children: "হোল্ডিং কর" }),
						/* @__PURE__ */ jsx("li", { children: "অটোরিকশা নিবন্ধন" }),
						/* @__PURE__ */ jsx("li", { children: "অভিযোগ দায়ের" })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold",
					children: "যোগাযোগ"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-3 text-sm opacity-90",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ jsxs("span", { children: [
								"খুলনা সিটি কর্পোরেশন ভবন,",
								/* @__PURE__ */ jsx("br", {}),
								"নগর ভবন, খুলনা ৯১০০"
							] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-accent" }), " ০৪১-৭২২৩৪৫"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-accent" }), " info@kcc.gov.bd"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-sidebar-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-80 sm:flex-row sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" খুলনা সিটি কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।"
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:underline",
						children: "গোপনীয়তা নীতি"
					}), /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:underline",
						children: "ব্যবহারের শর্ত"
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var services = [
	{
		icon: Building2,
		title: "ট্রেড লাইসেন্স (নতুন)",
		desc: "নতুন ব্যবসার জন্য অনলাইনে আবেদন করুন।",
		color: "bg-primary/10 text-primary"
	},
	{
		icon: FileCheck2,
		title: "ট্রেড লাইসেন্স নবায়ন",
		desc: "পুরাতন লাইসেন্স দ্রুত নবায়ন করুন।",
		color: "bg-success/10 text-success"
	},
	{
		icon: Baby,
		title: "জন্ম সনদ",
		desc: "নবজাতকের জন্ম নিবন্ধন ও সনদপ্রাপ্তি।",
		color: "bg-accent/10 text-accent"
	},
	{
		icon: FileHeart,
		title: "মৃত্যু সনদ",
		desc: "মৃত্যু নিবন্ধন ও সনদের জন্য আবেদন।",
		color: "bg-destructive/10 text-destructive"
	},
	{
		icon: Bike,
		title: "অটোরিকশা নিবন্ধন",
		desc: "অটোরিকশা ও রিকশার নিবন্ধন।",
		color: "bg-warning/20 text-warning-foreground"
	},
	{
		icon: Receipt,
		title: "হোল্ডিং কর তথ্য",
		desc: "হোল্ডিং কর গণনা ও পরিশোধ।",
		color: "bg-primary/10 text-primary"
	},
	{
		icon: AlertTriangle,
		title: "অভিযোগ দায়ের",
		desc: "নাগরিক সমস্যা ও অভিযোগ জানান।",
		color: "bg-accent/10 text-accent"
	},
	{
		icon: Search,
		title: "আবেদন ট্র্যাকিং",
		desc: "আবেদনের সর্বশেষ অবস্থা দেখুন।",
		color: "bg-secondary text-secondary-foreground"
	}
];
var stats = [
	{
		value: "১,২৪,৫০০+",
		label: "নিবন্ধিত নাগরিক",
		icon: Users
	},
	{
		value: "৮৬,২০০+",
		label: "সম্পন্ন আবেদন",
		icon: FileCheck2
	},
	{
		value: "৩১টি",
		label: "ওয়ার্ড",
		icon: MapPin
	},
	{
		value: "২৪/৭",
		label: "অনলাইন সেবা",
		icon: Clock
	}
];
var notices = [
	{
		date: "১৪ জুন, ২০২৬",
		tag: "জরুরি",
		tagVariant: "destructive",
		title: "জলাবদ্ধতা নিরসনে জরুরি ব্যবস্থা গ্রহণ",
		desc: "ভারী বর্ষণের কারণে নাগরিকদের জন্য জরুরি হেল্পলাইন চালু।"
	},
	{
		date: "১০ জুন, ২০২৬",
		tag: "ঘোষণা",
		tagVariant: "default",
		title: "হোল্ডিং কর পরিশোধের সময়সীমা বৃদ্ধি",
		desc: "২০২৬-২৭ অর্থবছরের কর পরিশোধের শেষ তারিখ ৩০ জুন।"
	},
	{
		date: "০৫ জুন, ২০২৬",
		tag: "তথ্য",
		tagVariant: "secondary",
		title: "ট্রেড লাইসেন্স অনলাইন আবেদন চালু",
		desc: "এখন থেকে সকল ট্রেড লাইসেন্স অনলাইনে আবেদন করা যাবে।"
	},
	{
		date: "০১ জুন, ২০২৬",
		tag: "ঘোষণা",
		tagVariant: "default",
		title: "ই-পেমেন্টে বিকাশ ও নগদ যুক্ত হলো",
		desc: "নাগরিক সেবার ফি এখন বিকাশ ও নগদে পরিশোধ করা যাবে।"
	}
];
var emergencies = [
	{
		icon: Phone,
		label: "নাগরিক হেল্পলাইন",
		number: "৩৩৩",
		color: "bg-primary text-primary-foreground"
	},
	{
		icon: Ambulance,
		label: "অ্যাম্বুলেন্স",
		number: "১৬২৬৩",
		color: "bg-destructive text-destructive-foreground"
	},
	{
		icon: Flame,
		label: "ফায়ার সার্ভিস",
		number: "১৬১৬৩",
		color: "bg-accent text-accent-foreground"
	},
	{
		icon: ShieldAlert,
		label: "পুলিশ",
		number: "৯৯৯",
		color: "bg-sidebar text-sidebar-foreground"
	}
];
var faqs = [
	{
		q: "অনলাইনে আবেদন করতে কী কী প্রয়োজন?",
		a: "জাতীয় পরিচয়পত্র, সচল মোবাইল নম্বর এবং প্রাসঙ্গিক ডকুমেন্টের স্ক্যান কপি প্রয়োজন।"
	},
	{
		q: "আবেদনের অবস্থা কীভাবে জানব?",
		a: "ড্যাশবোর্ডে লগইন করে অথবা ট্র্যাকিং নম্বর দিয়ে যেকোনো সময় আবেদনের অবস্থা দেখা যাবে।"
	},
	{
		q: "ফি পরিশোধের কোন কোন মাধ্যম রয়েছে?",
		a: "বিকাশ, নগদ এবং ব্যাংক চালানের মাধ্যমে ফি পরিশোধ করা যাবে।"
	},
	{
		q: "সেবা পেতে কত সময় লাগে?",
		a: "সেবা অনুযায়ী ৩ থেকে ১৫ কার্যদিবস। জরুরি ক্ষেত্রে দ্রুততর প্রক্রিয়া রয়েছে।"
	},
	{
		q: "ভুল তথ্য সংশোধন কীভাবে করব?",
		a: "প্রোফাইল থেকে যেকোনো সময় ব্যক্তিগত তথ্য সংশোধন করা যাবে। আবেদনের তথ্য সংশোধনের জন্য সংশ্লিষ্ট অফিসে যোগাযোগ করতে হবে।"
	}
];
function HomePage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsxs("section", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("img", {
							src: khulna_hero_default,
							alt: "খুলনা শহরের রূপসা নদী",
							width: 1920,
							height: 1080,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-sidebar/95 via-sidebar/80 to-sidebar/40" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36",
						children: [
							/* @__PURE__ */ jsxs(Badge, {
								variant: "outline",
								className: "border-accent/50 bg-accent/10 text-accent backdrop-blur",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "mr-1 h-3 w-3" }), " সরকারি ডিজিটাল সেবা"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-sidebar-foreground sm:text-5xl lg:text-6xl",
								children: [
									"খুলনা সিটি কর্পোরেশনের ",
									/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
									/* @__PURE__ */ jsx("span", {
										className: "bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent",
										children: "সকল নাগরিক সেবা"
									}),
									" এক জায়গায়"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-2xl text-base leading-relaxed text-sidebar-foreground/85 sm:text-lg",
								children: "ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর, অভিযোগ — ঘরে বসে দ্রুত, নিরাপদ ও স্বচ্ছ ডিজিটাল সেবা।"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsx(Button, {
									size: "lg",
									variant: "hero",
									asChild: true,
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/auth",
										search: { mode: "signup" },
										children: ["নাগরিক নিবন্ধন ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								}), /* @__PURE__ */ jsx(Button, {
									size: "lg",
									variant: "outline",
									className: "border-sidebar-foreground/30 bg-sidebar/40 text-sidebar-foreground backdrop-blur hover:bg-sidebar/60 hover:text-sidebar-foreground",
									asChild: true,
									children: /* @__PURE__ */ jsx("a", {
										href: "#services",
										children: "সেবাসমূহ দেখুন"
									})
								})]
							}),
							/* @__PURE__ */ jsx(Card, {
								className: "mt-10 max-w-2xl border-0 bg-card/95 shadow-[var(--shadow-elegant)] backdrop-blur",
								children: /* @__PURE__ */ jsxs(CardContent, {
									className: "p-5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "আবেদন ট্র্যাক করুন"
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2",
										children: [/* @__PURE__ */ jsx(Input, { placeholder: "ট্র্যাকিং নম্বর (যেমন: KNC-260614-A1B2C3)" }), /* @__PURE__ */ jsxs(Button, {
											variant: "accent",
											className: "shrink-0",
											children: [
												/* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "hidden sm:inline",
													children: "খুঁজুন"
												})
											]
										})]
									})]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "border-y bg-secondary/40",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-0 sm:px-6 md:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 bg-background p-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-display text-2xl font-bold",
									children: s.value
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: s.label
								})]
							})]
						}, s.label))
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					id: "services",
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ jsx(Badge, {
								variant: "secondary",
								className: "text-primary",
								children: "নাগরিক সেবা"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
								children: "দ্রুত সেবাসমূহ"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground",
								children: "যে সেবাটি প্রয়োজন তা নির্বাচন করুন এবং অনলাইনে আবেদন প্রক্রিয়া শুরু করুন।"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: services.map((s) => /* @__PURE__ */ jsx(Card, {
							className: "group cursor-pointer border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]",
							children: /* @__PURE__ */ jsxs(CardContent, {
								className: "p-6",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `grid h-12 w-12 place-items-center rounded-xl ${s.color}`,
										children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-4 text-base font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1.5 text-sm text-muted-foreground",
										children: s.desc
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100",
										children: ["আবেদন করুন ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						}, s.title))
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
					children: /* @__PURE__ */ jsx("div", {
						className: "rounded-3xl bg-[image:var(--gradient-hero)] p-8 sm:p-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid items-center gap-8 lg:grid-cols-[1fr_auto]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "text-primary-foreground",
								children: [
									/* @__PURE__ */ jsx(Badge, {
										variant: "outline",
										className: "border-accent/40 bg-accent/20 text-accent-foreground",
										children: "জরুরি যোগাযোগ"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "mt-3 font-display text-2xl font-bold sm:text-3xl",
										children: "যেকোনো জরুরি প্রয়োজনে"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 max-w-md text-primary-foreground/85",
										children: "২৪ ঘণ্টা সক্রিয় হেল্পলাইন। তাৎক্ষণিক সহায়তার জন্য নিচের নম্বরগুলোতে কল করুন।"
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2",
								children: emergencies.map((e) => /* @__PURE__ */ jsxs("a", {
									href: `tel:${e.number}`,
									className: `${e.color} flex items-center gap-3 rounded-2xl p-4 transition-transform hover:scale-105`,
									children: [/* @__PURE__ */ jsx(e.icon, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-xs opacity-90",
											children: e.label
										}), /* @__PURE__ */ jsx("div", {
											className: "font-display text-lg font-bold leading-none",
											children: e.number
										})]
									})]
								}, e.label))
							})]
						})
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					id: "notices",
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Badge, {
							variant: "secondary",
							className: "text-primary",
							children: "সর্বশেষ"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "নোটিশ ও ঘোষণা"
						})] }), /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hidden text-sm font-medium text-primary hover:underline sm:inline-flex",
							children: "সকল নোটিশ →"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-4 lg:grid-cols-2",
						children: notices.map((n, i) => /* @__PURE__ */ jsx(Card, {
							className: "border-l-4 border-l-primary transition-shadow hover:shadow-md",
							children: /* @__PURE__ */ jsxs(CardContent, {
								className: "p-5",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-2 text-xs",
										children: [/* @__PURE__ */ jsx(Badge, {
											variant: n.tagVariant,
											children: n.tag
										}), /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: n.date
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-3 font-semibold",
										children: n.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: n.desc
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "#",
										className: "mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline",
										children: ["বিস্তারিত পড়ুন ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						}, i))
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					id: "faq",
					className: "border-y bg-secondary/30",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ jsx(Badge, {
									variant: "secondary",
									className: "text-primary",
									children: "প্রশ্নোত্তর"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
									children: "সাধারণ জিজ্ঞাসা"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "নাগরিকদের সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নসমূহ"
								})
							]
						}), /* @__PURE__ */ jsx(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-8",
							children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
								value: `f-${i}`,
								className: "rounded-lg border bg-background px-4 mb-2 border-b",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left font-medium",
									children: f.q
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "text-muted-foreground",
									children: f.a
								})]
							}, i))
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					id: "contact",
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Badge, {
								variant: "secondary",
								className: "text-primary",
								children: "যোগাযোগ"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
								children: "আপনার মতামত জানান"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground",
								children: "সেবা উন্নয়নে আপনার পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ।"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 space-y-4",
								children: [
									{
										icon: MapPin,
										label: "ঠিকানা",
										val: "খুলনা সিটি কর্পোরেশন, নগর ভবন, খুলনা ৯১০০"
									},
									{
										icon: Phone,
										label: "ফোন",
										val: "০৪১-৭২২৩৪৫ / হেল্পলাইন ৩৩৩"
									},
									{
										icon: Mail,
										label: "ইমেইল",
										val: "info@kcc.gov.bd"
									}
								].map((c) => /* @__PURE__ */ jsxs("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ jsx(c.icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-wider text-muted-foreground",
										children: c.label
									}), /* @__PURE__ */ jsx("div", {
										className: "font-medium",
										children: c.val
									})] })]
								}, c.label))
							})
						] }), /* @__PURE__ */ jsx(Card, {
							className: "shadow-[var(--shadow-card)]",
							children: /* @__PURE__ */ jsxs(CardContent, {
								className: "space-y-4 p-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "text-sm font-medium",
											children: "নাম"
										}), /* @__PURE__ */ jsx(Input, {
											className: "mt-1.5",
											placeholder: "আপনার নাম"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "text-sm font-medium",
											children: "মোবাইল"
										}), /* @__PURE__ */ jsx(Input, {
											className: "mt-1.5",
											placeholder: "০১৭xxxxxxxx"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "text-sm font-medium",
										children: "ইমেইল"
									}), /* @__PURE__ */ jsx(Input, {
										className: "mt-1.5",
										type: "email",
										placeholder: "email@example.com"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "text-sm font-medium",
										children: "বার্তা"
									}), /* @__PURE__ */ jsx(Textarea, {
										className: "mt-1.5",
										rows: 4,
										placeholder: "আপনার বার্তা লিখুন..."
									})] }),
									/* @__PURE__ */ jsxs(Button, {
										variant: "accent",
										className: "w-full",
										children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), " বার্তা পাঠান"]
									})
								]
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { HomePage as component };
