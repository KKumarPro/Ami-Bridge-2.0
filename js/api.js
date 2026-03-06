const API_BASE = "http://localhost:5000/api";

/* GENERIC REQUEST */

async function apiRequest(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(API_BASE + endpoint, options);

  return response.json();
}

/* AUTH */

export async function login(email, password, role) {
  return apiRequest("/auth/login", "POST", { email, password, role });
}

export async function register(name, email, password, role) {
  return apiRequest("/auth/register", "POST", { name, email, password, role });
}

/* PROFILE */

export async function getProfile() {
  return apiRequest("/student/profile");
}

/* ATTEMPTS */

export async function getAttempts() {
  return apiRequest("/student/attempts");
}

export async function submitAttempt(data) {
  return apiRequest("/student/attempt", "POST", data);
}
