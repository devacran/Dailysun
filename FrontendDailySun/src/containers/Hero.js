import TodayCard from "../components/TodayCard.js";
import CityCard from "../components/CityCard.js";
const Hero = async ({ today, data, units }) => {
  const { daily } = data;
  await CityCard({ today, units });
  await TodayCard({ daily, today, units });
};
export default Hero;
