const Chart = require("chart.js");
function script() {
  var ctx = document.getElementById("myChart").getContext("2d");
  const data = {
    labels: [
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm"
    ],
    datasets: [
      {
        data: [23, 32, 25, 26, 24, 22, 23, 32, 25, 26, 24, 22],
        backgroundColor: "#D6EBF4",
        pointRadius: 10
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: false, //habilitalos solo para desarrollo
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            min: 15, //Valor minimo de temp
            max: 35, //Valor maximo de temp
            stepSize: 10
          }
        }
      ]
    }
  };

  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
}
export default script;
