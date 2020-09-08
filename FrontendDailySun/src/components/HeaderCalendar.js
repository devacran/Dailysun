import AppComponent from "../utils/createComponent.js";
import { utcToLocalTime } from "../utils/getDates";
import config from "../../config.js";
const API_URL = config.API_URL;

const HeaderCalendar = data => {
  const headerCalendar = new AppComponent({
    parent: "header-calendar__right",
    className: "header-calendar__city-info"
  });
  const currentTime = utcToLocalTime(data.dt);
  const componentStr = `
      <div class='header-calendar__city-title'>${data.name}</div>
      <div class='header-calendar__weather'>
        <div class='header-calendar__weather-status'>${
          data.weather[0].description
        }</div>
        <div class='header-calendar__weather-icon'>
        <img
          src="${API_URL}/static/icons/${data.weather[0].icon}@2x.png"
        />
        </div>
        <span class='header-calendar__temp'>${Math.floor(
          data.main.temp
        )}°C</span>
        <span class='header-calendar__time'>${currentTime}</span>
      </div>

  `;
  headerCalendar.renderComponent(componentStr);
};
export default HeaderCalendar;
