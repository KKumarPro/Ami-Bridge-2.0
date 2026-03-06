import { requireAuth } from "./utils.js";
import { getAttempts } from "./api.js";

requireAuth();

async function loadAttempts() {
  const attempts = await getAttempts();

  const table = document.querySelector(".attempts-table tbody");

  table.innerHTML = "";

  attempts.forEach((a) => {
    table.innerHTML += `
<tr>
<td>${a.company}</td>
<td>${a.date}</td>
<td>${a.score}</td>
<td>${a.status}</td>
<td><button class="view-btn">View</button></td>
</tr>
`;
  });
}

loadAttempts();
