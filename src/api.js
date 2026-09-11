const BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

export async function api(path, options = {}) {
  const token = sessionStorage.getItem("mbhombi_token");
  let response;
  try {
    response = await fetch(`${BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw Object.assign(new Error("Cannot connect to the server."), { status: 0 });
  }
  const type = response.headers.get("content-type") || "";
  const body = response.status === 204 ? null : type.includes("json") ? await response.json() : await response.text();
  if (!response.ok) {
    if (response.status === 401) {
      sessionStorage.removeItem("mbhombi_token");
      window.dispatchEvent(new Event("auth:logout"));
    }
    const message = (body && typeof body === "object" && (body.message || body.error)) || body || `Request failed (${response.status}).`;
    throw Object.assign(new Error(String(message)), { status: response.status });
  }
  return body;
}

export const authApi = {
  login: (body) => api("/api/v1/auth/login", { method: "POST", body: JSON.stringify(body) }),
  register: (body) => api("/api/v1/auth/register", { method: "POST", body: JSON.stringify(body) }),
};
export const accountApi = {
  list: () => api("/api/v1/accounts"),
  create: (body) => api("/api/v1/accounts/", { method: "POST", body: JSON.stringify(body) }),
};
export const profileApi = {
  me: () => api("/api/v1/profiles/me"),
  update: (body) => api("/api/v1/profiles/me", { method: "PUT", body: JSON.stringify(body) }),
  remove: () => api("/api/v1/profiles/me", { method: "DELETE" }),
};
