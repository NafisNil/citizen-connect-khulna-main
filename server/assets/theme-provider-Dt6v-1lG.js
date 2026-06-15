import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/lib/theme-provider.tsx
var ThemeCtx = createContext({
	theme: "light",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		const initial = (typeof window !== "undefined" && localStorage.getItem("theme")) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const toggle = () => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.classList.toggle("dark", next === "dark");
			localStorage.setItem("theme", next);
			return next;
		});
	};
	return /* @__PURE__ */ jsx(ThemeCtx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
var useTheme = () => useContext(ThemeCtx);
//#endregion
export { useTheme as n, ThemeProvider as t };
