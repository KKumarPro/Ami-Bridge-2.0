export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");

  window.location.href = "auth.html";
}

export function requireAuth() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "auth.html";
  }
}
