import { requireAuth } from "./utils.js";
import { getProfile, getAttempts } from "./api.js";

requireAuth();

async function loadDashboard() {
  const profile = await getProfile();

  document.querySelector(".user-name").innerText = profile.name;
  document.querySelector(".stat-value").innerText = profile.prScore;

  const attempts = await getAttempts();

  const table = document.querySelector(".attempts-table tbody");

  if (!table) return;

  table.innerHTML = "";

  attempts.forEach((a) => {
    table.innerHTML += `
<tr>
<td>${a.company}</td>
<td>${a.date}</td>
<td>${a.score}</td>
<td>${a.status}</td>
</tr>
`;
  });
}

loadDashboard();
