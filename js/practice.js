import { requireAuth } from "./utils.js";

requireAuth();

document.querySelectorAll(".start-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const company = button.dataset.company;

    localStorage.setItem("currentCompany", company);

    window.location.href = "interview.html";
  });
});
