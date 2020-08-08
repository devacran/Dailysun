import TodayCard from "../components/TodayCard.js";
import CityCard from "../components/CityCard.js";
const Hero = async ({ today, data }) => {
  const { daily } = data;
  await CityCard({ today });
  await TodayCard({ daily, today });
};
export default Hero;
