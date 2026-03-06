function selectRole(button) {
  const roles = document.querySelectorAll(".role");

  roles.forEach((role) => {
    role.classList.remove("active");
  });

  button.classList.add("active");
}

/* SHOW SIGNUP */

function showSignup() {
  document.getElementById("signin-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";

  document.getElementById("form-title").innerText =
    "Create your Ami-Bridge account";
}

/* SHOW SIGNIN */

function showSignin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("signin-form").style.display = "block";

  document.getElementById("form-title").innerText =
    "Choose your role and sign in";
}

/* REDIRECT AFTER LOGIN */

function goToDashboard() {
  const activeRole = document.querySelector(".role.active").innerText;

  if (activeRole === "Student") {
    window.location.href = "student-dashboard.html";
  }

  if (activeRole === "Mentor") {
    window.location.href = "mentor-dashboard.html";
  }

  if (activeRole === "Admin") {
    window.location.href = "admin-dashboard.html";
  }
}
