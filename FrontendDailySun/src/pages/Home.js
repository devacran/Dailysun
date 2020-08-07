import $home from "../pug/home/home.pug";
import createPage from "../utils/createPage.js";
import HourSection from "../components/HourSection.js";
import TodayCard from "../components/TodayCard.js";
import CityCard from "../components/CityCard.js";
import { getData, getTodayData } from "../utils/network";

const Home = async () => {
  const { hourly, daily } = await getData();
  const today = await getTodayData();
  console.log(today);
  createPage($home);
  await CityCard({ today });
  await TodayCard({ daily, today });
  await HourSection({ hourly });
};

export default Home;
