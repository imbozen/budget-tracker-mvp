// public/js/common.js

function createPieChart(ctx, labels, data) {
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#ff6384","#36a2eb","#ffcd56","#4bc0c0",
          "#9966ff","#ff9f40","#66ff66","#ff6666"
        ]
      }]
    },
    options: {
      responsive: true
    }
  });
}

function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocal(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}