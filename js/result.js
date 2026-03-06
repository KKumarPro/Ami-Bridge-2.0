import { requireAuth } from "./utils.js";

requireAuth();

const score = localStorage.getItem("lastScore");

if (score) {
  document.querySelector(".result-value").innerText = score;
}
