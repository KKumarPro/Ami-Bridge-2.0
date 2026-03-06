const ctx = document.getElementById("performanceChart");

new Chart(ctx, {
  type: "line",

  data: {
    labels: ["Attempt 1", "Attempt 2", "Attempt 3", "Attempt 4", "Attempt 5"],

    datasets: [
      {
        label: "Coding Score",
        data: [60, 65, 72, 80, 85],
        borderWidth: 3,
        tension: 0.3,
      },

      {
        label: "Mock Interview Score",
        data: [55, 60, 68, 74, 78],
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
