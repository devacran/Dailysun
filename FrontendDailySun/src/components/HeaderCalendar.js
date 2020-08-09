import AppComponent from "../utils/createComponent.js";
import { utcToLocalTime } from "../utils/getDates";
const HeaderCalendar = data => {
  const headerCalendar = new AppComponent({
    parent: "header-calendar__right",
    className: "header-calendar__city-info"
  });
  const currentTime = utcToLocalTime(data.dt);
  const componentStr = `
      <div class='header-calendar__city-title'>${data.name}</div>
      <div class='header-calendar__weather'>
        <div>${data.weather[0].description}</div>
        <div class='header-calendar__weather-icon'><i class="wi wi-day-sunny"></i></div>
        <span>${data.main.temp}°c</span>
        <span class='header-calendar__time'>${currentTime}</span>
      </div>

  `;
  headerCalendar.renderComponent(componentStr);
};
export default HeaderCalendar;
