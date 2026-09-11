import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
function payload(token) {
  try { return JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))); }
  catch { return {}; }
}
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem("mbhombi_token"));
  useEffect(() => {
    const logout = () => setToken(null);
    window.addEventListener("auth:logout", logout);
    return () => window.removeEventListener("auth:logout", logout);
  }, []);
  const value = useMemo(() => ({
    token,
    user: token ? payload(token) : null,
    login(jwt) { sessionStorage.setItem("mbhombi_token", jwt); setToken(jwt); },
    logout() { sessionStorage.removeItem("mbhombi_token"); setToken(null); },
  }), [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
