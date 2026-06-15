import { t as cn } from "./utils-C_uf36nf.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-secondary hover:text-secondary-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			accent: "bg-accent text-accent-foreground shadow hover:bg-accent/90",
			hero: "bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 hover:shadow-xl transition-all"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
