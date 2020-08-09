import AppComponent from "../utils/createComponent.js";
import { utcToLocalTimeDay } from "../utils/getDates";
const TodayCard = ({ daily, today }) => {
  const todayCard = new AppComponent({
    parent: "today-card",
    className: "today-card__container"
  });
  console.log("est today", daily);
  const days = daily.slice(1, 4); //Aqui va la info de la api
  let componentStr = [];
  componentStr.push(`
    <div class="today-card__card today-card__card">
        <div class="today-card__clickable"></div>
        <div class="today-card__header--base">
          <a class="today-card__day-title--base">Today</a>
          <div class="today-card__day-temp">${Math.floor(
            today.main.temp
          )}°C</div>
        </div>
        <div class="today-card__content">
          <div class="today-card__day-icon--base">
            <img src='http://openweathermap.org/img/wn/${
              today.weather[0].icon
            }@2x.png'/>
          </div>
          <div class='today-card__day-status'>${
            today.weather[0].description
          }</div>
          <div class='today-card__day-info'>
            <div>
              Temp
              <span>
              <i class="wi wi-thermometer"></i>
                ${Math.floor(today.main.temp_min)}/${Math.floor(
    today.main.temp_max
  )}°C
              </span>
            </div>
            <div> Wind <span><i class="wi wi-day-sunny"></i>  ${Math.floor(
              today.wind.speed
            )} Km/h</span> </div>
            <div> Humedad <span><i class="wi wi-humidity"></i>${Math.floor(
              today.main.humidity
            )} %</span> </div>
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
            <div class="today-card__day-temp">${Math.floor(
              day.temp.day
            )}°C</div>
            <div class="today-card__day-icon">
              <img src='http://openweathermap.org/img/wn/${
                day.weather[0].icon
              }@2x.png'/>
            </div>
          </div>
          <div class="today-card__content">
          <div class="today-card__day-icon--base">
            <img src='http://openweathermap.org/img/wn/${
              day.weather[0].icon
            }@2x.png'/>
          </div>
            <div class='today-card__day-status'>${
              day.weather[0].description
            }</div>
            <div class='today-card__day-info'>
              <div> Temp <span>${Math.floor(day.temp.min)}/${Math.floor(
      day.temp.max
    )} °C<i class="wi wi-thermometer"></i></span> </div>
              <div> Wind <span>45% <i class="wi wi-day-sunny"></i></span> </div>
              <div> Humedad <span>${
                day.humidity
              }<i class="wi wi-humidity"></i></span> </div>
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
