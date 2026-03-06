import { requireAuth } from "./utils.js";
import { getProfile, updateProfile } from "./api.js";

requireAuth();

async function loadProfile() {
  const profile = await getProfile();

  document.querySelector("#profile-name").value = profile.name;
  document.querySelector("#profile-email").value = profile.email;
}

async function updateUserProfile() {
  const name = document.querySelector("#profile-name").value;
  const email = document.querySelector("#profile-email").value;

  await updateProfile({
    name,
    email,
  });

  alert("Profile updated");
}

document
  .querySelector(".update-btn")
  ?.addEventListener("click", updateUserProfile);

loadProfile();
