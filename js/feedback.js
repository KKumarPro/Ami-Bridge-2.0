import { requireAuth } from "./utils.js";
import { getFeedback } from "./api.js";

requireAuth();

async function loadFeedback() {
  try {
    const feedbackList = await getFeedback();

    const container = document.querySelector(".feedback-list");

    if (!container) return;

    container.innerHTML = "";

    feedbackList.forEach((f) => {
      container.innerHTML += `
<div class="mentor-feedback-card">

<div class="mentor-info">

<div class="mentor-avatar">
${f.mentorName.charAt(0)}
</div>

<div>
<h4>${f.mentorName}</h4>
<p class="mentor-role">${f.mentorRole}</p>
</div>

</div>

<p class="reviewed-attempt">
Reviewed Attempt: ${f.company}
</p>

<p class="mentor-rating">
Rating: ${"⭐".repeat(f.rating)}
</p>

<div class="mentor-comments">

<p><strong>Strengths:</strong></p>

<ul>
${f.strengths.map((s) => `<li>${s}</li>`).join("")}
</ul>

<p><strong>Improvements:</strong></p>

<ul>
${f.improvements.map((i) => `<li>${i}</li>`).join("")}
</ul>

</div>

</div>
`;
    });
  } catch (error) {
    console.error("Failed to load feedback:", error);
  }
}

loadFeedback();
