const Chart = require("chart.js");
import { utcToLocalTime } from "../utils/getDates";
function script(props) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var gradientFill = ctx.createLinearGradient(0, 0, 0, 150);
  gradientFill.addColorStop(0, "rgba(213, 234, 242, 0.6)");
  gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.6)");
  let labels = [];
  let datasets = [];
  let tempMax = 0;
  let tempMin = 1000;
  props.slice(0, 14).forEach((hour, i) => {
    tempMax = hour.temp >= tempMax ? hour.temp : tempMax;
    tempMin = hour.temp <= tempMin ? hour.temp : tempMin;
    datasets.push(Math.floor(hour.temp));
    labels.push(utcToLocalTime(hour.dt));
  });
  console.log(tempMax, tempMin);
  const data = {
    labels: labels,
    datasets: [
      {
        data: datasets,
        // backgroundColor: "#D6EBF4",
        backgroundColor: gradientFill,
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
            min: tempMin - 5, //Valor minimo de temp
            max: tempMax + 5, //Valor maximo de temp
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
