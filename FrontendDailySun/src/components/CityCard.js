import { utcToLocalDate } from "../utils/getDates.js";
const CityCard = ({ today }) => {
  const parent = document.getElementById("city-card");
  const cityCard = document.createElement("div");
  const days = [1, 2, 3]; //Aqui va la info de la api
  const currentDate = utcToLocalDate(today.dt);
  let renderCityCard = [];
  renderCityCard.push(`
    <div class="city-card__info">
        <div class="city-card__weather-status">
            ${today.weather[0].main}
        </div>
        <div class="city-card__city-name">
            ${today.name}
        </div>
        <div class="city-card__date">
            ${currentDate}
        </div>
        <div class="city-card__temp">
            ${today.main.temp}
        </div>
    </div>
    `);

  cityCard.innerHTML = renderCityCard.join(``);
  parent.appendChild(cityCard).setAttribute("class", "city-card__container");
};
export default CityCard;
