function selectRole(button) {
  const roles = document.querySelectorAll(".role");

  roles.forEach((role) => {
    role.classList.remove("active");
  });

  button.classList.add("active");
}

function showSignup() {
  document.getElementById("signin-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";

  document.getElementById("form-title").innerText =
    "Create your Ami-Bridge account";
}

function showSignin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("signin-form").style.display = "block";

  document.getElementById("form-title").innerText =
    "Choose your role and sign in";
}
