import script from "../js/chart.js";
import { utcToLocalTime } from "../utils/getDates.js";
const HourSection = async ({ hourly }) => {
  const parent = document.getElementById("hour-section");
  const hourCards = document.createElement("div");
  const hours = hourly.slice(1, 13); //Solo las primeras 12 horas
  const renderHours = [];
  hours.forEach((hour, index) => {
    const time = utcToLocalTime(hour.dt);
    renderHours.push(`
      <div class='hour-section__card'>
        <div>${hour.humidity}%</div>
        <div class='hour-section__icon'>
          <img src='http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png'/>
          </div>
        <div>${time}</div>
        </div>
      `);
  });
  hourCards.innerHTML = renderHours.join(``);
  parent.appendChild(hourCards).setAttribute("class", "hour-section__info");
  script(hourly);
};
export default HourSection;
