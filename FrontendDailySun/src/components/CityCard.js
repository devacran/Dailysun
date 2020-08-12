import AppComponent from "../utils/createComponent.js";
import { utcToLocalDate } from "../utils/getDates.js";
const CityCard = ({ today, units }) => {
  const cityCard = new AppComponent({
    parent: "city-card",
    className: "city-card__container"
  });
  const days = [1, 2, 3]; //Aqui va la info de la api
  const currentDate = utcToLocalDate(today.dt);
  console.log("units es citycard", units);
  let componentStr = [];
  componentStr.push(`
    <div class="city-card__info">
        <div class="city-card__temp">
            ${Math.floor(today.main.temp)}${units === "metric" ? "C°" : "F°"}
        </div>
        <div class="city-card__city-name">
            ${today.name}
        </div>
        <div class="city-card__date">
            ${currentDate}
        </div>
    </div>
    `);
  cityCard.renderComponent(componentStr);
};
export default CityCard;
