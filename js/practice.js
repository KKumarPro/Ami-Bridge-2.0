import { submitAttempt } from "./api.js";
import { requireAuth } from "./utils.js";

requireAuth();

const submitBtn = document.querySelector(".submit-interview");

submitBtn?.addEventListener("click", async () => {
  const answers = [];

  document.querySelectorAll(".answer-box").forEach((a) => {
    answers.push(a.value);
  });

  const result = await submitAttempt({
    company: "Google",
    answers,
  });

  if (result.success) {
    window.location.href = "result.html";
  } else {
    alert("Submission failed");
  }
});
