var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["Very Likely", "Fairly Likely", "Neutral", "Not Very Likely", "Not at all Likely"],
    datasets: [{
      data: [66.7, 16.7, 8.3, 8.3, 0],
      backgroundColor: ["#203c6b", "#b53e3e", "#b86a33", "#489c55", "#98489c"],
      hoverBackgroundColor: ["#325ea8", "#fa5555", "#cf8957", "#63d676", "#d667db"]
    }]
  },
  options: {
    responsive: true
  }
});
