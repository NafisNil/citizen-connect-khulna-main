import { createClient } from "@supabase/supabase-js";
//#region src/integrations/supabase/client.ts
function createSupabaseClient() {
	return createClient("https://pnltajzfighppxkqqzdf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubHRhanpmaWdocHB4a3FxemRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTcyOTIsImV4cCI6MjA5NzAzMzI5Mn0.RwukZuxPNDXaTblOzbYmVH_P1jYSuOuXJ1BUebJl-e4", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
