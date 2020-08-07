import { utcToLocalTime } from "../utils/getDates";
const HeaderCalendar = data => {
  const parent = document.getElementById("header-calendar__right");
  const headerSectionRight = document.createElement("div");

  const currentTime = utcToLocalTime(data.dt);
  headerSectionRight.innerHTML = `

      <div class='header-calendar__city-title'>${data.name}</div>
      <div class='header-calendar__weather'>
        <div>${data.weather[0].description}</div>
        <div class='header-calendar__weather-icon'><i class="wi wi-day-sunny"></i></div>
        <span>${data.main.temp}°c</span>
        <span class='header-calendar__time'>${currentTime}</span>
      </div>

  `;
  parent
    .appendChild(headerSectionRight)
    .setAttribute("class", "header-calendar__city-info");
};
export default HeaderCalendar;
