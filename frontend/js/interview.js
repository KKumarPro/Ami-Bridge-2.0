import { requireAuth } from "./utils.js";
import { getQuestions, submitAttempt } from "./api.js";

requireAuth();

const company = localStorage.getItem("currentCompany");

async function loadQuestions() {
  const questions = await getQuestions(company);

  const container = document.querySelector(".questions-container");

  container.innerHTML = "";

  questions.forEach((q, index) => {
    container.innerHTML += `
<div class="question-card">

<p class="question-title">Question ${index + 1}</p>

<p class="question-text">${q.question}</p>

<textarea class="answer-box"></textarea>

</div>
`;
  });
}

async function submitInterview() {
  const answers = [];

  document.querySelectorAll(".answer-box").forEach((a) => {
    answers.push(a.value);
  });

  const result = await submitAttempt({
    company,
    answers,
  });

  if (result.success) {
    localStorage.setItem("lastAttempt", result.attemptId);

    window.location.href = "result.html";
  }
}

document
  .querySelector(".submit-interview")
  ?.addEventListener("click", submitInterview);

loadQuestions();
