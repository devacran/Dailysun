import script from "../js/chart.js";
import { utcToLocalTime } from "../utils/getDates.js";
import AppComponent from "../utils/createComponent.js";
const HourSection = async ({ data }) => {
  const { hourly } = data;
  const hourSection = new AppComponent({
    parent: "hour-section",
    className: "hour-section__info"
  });
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
  hourSection.renderComponent(renderHours);
  script(hourly);
};
export default HourSection;
