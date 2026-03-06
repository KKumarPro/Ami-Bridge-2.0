import { login, register } from "./api.js";
import { requireAuth } from "./utils.js";

requireAuth();

const signinBtn = document.querySelector("#signin-btn");
const signupBtn = document.querySelector("#signup-btn");

signinBtn?.addEventListener("click", async () => {
  const email = document.querySelector("#signin-email").value;
  const password = document.querySelector("#signin-password").value;
  const role = document.querySelector(".role.active").innerText;

  const result = await login(email, password, role);

  if (result.success) {
    window.location.href = "student-dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});

signupBtn?.addEventListener("click", async () => {
  const name = document.querySelector("#signup-name").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  const role = document.querySelector(".role.active").innerText;

  const result = await register(name, email, password, role);

  if (result.success) {
    window.location.href = "student-dashboard.html";
  } else {
    alert(result.message);
  }
});
