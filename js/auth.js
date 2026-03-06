import { login, register } from "./api.js";
import { setToken } from "./utils.js";

/* ROLE SELECTOR */

const roles = document.querySelectorAll(".role");

roles.forEach((button) => {
  button.addEventListener("click", () => {
    roles.forEach((r) => r.classList.remove("active"));

    button.classList.add("active");
  });
});

/* TOGGLE SIGNUP / SIGNIN */

const signupLink = document.getElementById("show-signup");
const signinLink = document.getElementById("show-signin");

signupLink?.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("signin-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
});

signinLink?.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("signup-form").style.display = "none";
  document.getElementById("signin-form").style.display = "block";
});

/* SIGN IN */

const signinBtn = document.getElementById("signin-btn");

signinBtn?.addEventListener("click", async () => {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  const role = document.querySelector(".role.active").innerText;

  const result = await login(email, password, role);

  if (result.success) {
    setToken(result.token);

    window.location.href = "student-dashboard.html";
  } else {
    alert("Invalid login credentials");
  }
});

/* SIGN UP */

const signupBtn = document.getElementById("signup-btn");

signupBtn?.addEventListener("click", async () => {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const role = document.querySelector(".role.active").innerText;

  const result = await register(name, email, password, role);

  if (result.success) {
    setToken(result.token);

    window.location.href = "student-dashboard.html";
  } else {
    alert(result.message);
  }
});
