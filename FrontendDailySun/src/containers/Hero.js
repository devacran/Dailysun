import TodayCard from "../components/TodayCard.js";
import CityCard from "../components/CityCard.js";
import config from "../../config.js";
const API_URL = config.API_URL;

const Hero = async ({ today, data, units }) => {
  const { daily } = data;
  await CityCard({ today, units });
  await TodayCard({ daily, today, units });
  setBackground(today);
};
export default Hero;

const setBackground = data => {
  const backgroundID = data.weather[0].icon;
  const hero = document.getElementById("hero");
  hero.style.backgroundImage = `url(${API_URL}/static/images/${backgroundID}.png`;
};
