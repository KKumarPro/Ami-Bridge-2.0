import { requireAuth } from "./utils.js";
import { uploadResume } from "./api.js";

requireAuth();

document.querySelector(".upload-btn")?.addEventListener("click", async () => {
  const fileInput = document.querySelector(".resume-input");

  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a resume");

    return;
  }

  const result = await uploadResume({ file });

  if (result.success) {
    alert("Resume uploaded successfully");
  }
});
