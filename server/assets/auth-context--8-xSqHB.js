import { t as supabase } from "./client-DVI0JNbQ.js";
import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/lib/auth-context.tsx
var AuthContext = createContext({
	session: null,
	user: null,
	loading: true,
	signOut: async () => {}
});
function AuthProvider({ children }) {
	const [session, setSession] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
			setSession(s);
			setLoading(false);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	return /* @__PURE__ */ jsx(AuthContext.Provider, {
		value: {
			session,
			user: session?.user ?? null,
			loading,
			signOut: async () => {
				await supabase.auth.signOut();
			}
		},
		children
	});
}
var useAuth = () => useContext(AuthContext);
//#endregion
export { useAuth as n, AuthProvider as t };
