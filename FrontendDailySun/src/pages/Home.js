import $home from "../pug/home/home.pug";
import createPage from "../utils/createPage.js";
import HourSection from "../components/HourSection.js";
import HourSectionSkeleton from "../components/HourSectionSkeleton.js";
import Hero from "../containers/Hero.js";
import HeroSkeleton from "../containers/HeroSkeleton.js";

import { getData, getTodayData } from "../utils/network";

const Home = async appState => {
  createPage($home);
  await HeroSkeleton();
  const data = await getData();
  const today = appState.state.todayData
    ? appState.state.todayData
    : await getTodayData();
  console.log("today data2", today);
  console.log("today data1", await getTodayData());
  data || today ? await Hero({ today, data }) : await HeroSkeleton();
  data ? await HourSection({ data }) : await HourSectionSkeleton();
};

export default Home;
