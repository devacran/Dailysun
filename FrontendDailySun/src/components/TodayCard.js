import AppComponent from "../utils/createComponent.js";
import { utcToLocalTimeDay } from "../utils/getDates";
import config from "../../config.js";
const API_URL = config.API_URL;
const TodayCard = ({ daily, today, units }) => {
  const todayCard = new AppComponent({
    parent: "today-card",
    className: "today-card__container"
  });
  const days = daily.slice(1, 4); //Aqui va la info de la api
  let componentStr = [];
  componentStr.push(`
    <div class="today-card__card today-card__card">
      <div class="today-card__clickable"></div>
      <div class="today-card__header--base">
        <a class="today-card__day-title--base">Hoy</a>
        <div class="today-card__day-temp">
        ${Math.floor(today.main.temp)}${units === "metric" ? "C°" : "F°"}
        </div>
      </div>
      <div class="today-card__content today-card__content--base">
        <div class="today-card__day-icon--base">
          <img
            src="${API_URL}/static/icons/${today.weather[0].icon}@2x.png"
          />
        </div>
        <div class="today-card__day-status">${
          today.weather[0].description
        }</div>
        <div class="today-card__day-info">
          <i class="wi wi-thermometer"></i>
          <span>Temperatura</span>
          <span>
            ${Math.floor(today.main.temp_min)}/${Math.floor(
    today.main.temp_max
  )}${units === "metric" ? "C°" : "F°"}
          </span>
          <i class="wi wi-strong-wind"></i>
          <span>Viento</span>
          <span>${Math.floor(today.wind.speed)} Km/h</span>
          <i class="wi wi-humidity"></i>
          <span>Humedad</span>
          <span> ${Math.floor(today.main.humidity)} %</span>
        </div>
      </div>
    </div>

    `);
  days.forEach((day, index) => {
    componentStr.push(`
      <div class="today-card__card today-card__card--${index}">
          <div class="today-card__clickable"></div>
          <div class="today-card__header today-card__header--${index}">
            <a class="today-card__day-title">${utcToLocalTimeDay(day.dt)}</a>
            <div class="today-card__day-temp">${Math.floor(day.temp.day)}${
      units === "metric" ? "C°" : "F°"
    }</div>
            <div class="today-card__day-icon">
              <img src='${API_URL}/static/icons/${day.weather[0].icon}@2x.png'/>
            </div>
          </div>
          <div class="today-card__content">
          <div class="today-card__day-icon--base">
            <img src='${API_URL}/static/icons/${day.weather[0].icon}@2x.png'/>
          </div>
            <div class='today-card__day-status'>${
              day.weather[0].description
            }</div>
            <div class="today-card__day-info">
              <i class="wi wi-thermometer"></i>
              <span>Temp</span>
              <span>
                ${Math.floor(day.temp.min)}/${Math.floor(day.temp.max)}${
      units === "metric" ? "C°" : "F°"
    }
              </span>
              <i class="wi wi-strong-wind"></i>
              <span>Wind</span>
              <span> 20 Km/h</span>
              <i class="wi wi-humidity"></i>
              <span>Humedad</span>
              <span> ${Math.floor(day.humidity)} %</span>
            </div>
          </div>
      </div>
      `);
  });
  todayCard.renderComponent(componentStr);
  toggleCard();
};
export default TodayCard;

const toggleCard = () => {
  const card = document.getElementById("today-card");
  card.onclick = evn => {
    const el = evn.target;
    if (el.parentNode.style.bottom) {
      el.parentNode.removeAttribute("style");
    } else {
      el.parentNode.style.bottom = "0";
    }
  };
};
