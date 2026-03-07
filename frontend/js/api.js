const API_BASE = "http://localhost:3000/api";

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

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

/* AUTH */

export async function login(email, password, role) {
  return apiRequest("/auth/login", "POST", {
    email,
    password,
    role,
  });
}

export async function register(name, email, password, role) {
  return apiRequest("/auth/register", "POST", {
    name,
    email,
    password,
    role,
  });
}

/* PROFILE */

export async function getProfile() {
  return apiRequest("/student/profile");
}

export async function updateProfile(data) {
  return apiRequest("/student/profile", "PUT", data);
}

/* ATTEMPTS */

export async function getAttempts() {
  return apiRequest("/student/attempts");
}

export async function submitAttempt(data) {
  return apiRequest("/student/attempt", "POST", data);
}

/* QUESTIONS */

export async function getQuestions(company) {
  return apiRequest(`/questions/${company}`);
}

/* RESUME */

export async function uploadResume(data) {
  return apiRequest("/student/resume", "POST", data);
}

/* FEEDBACK */

export async function getFeedback() {
  return apiRequest("/student/feedback");
}
