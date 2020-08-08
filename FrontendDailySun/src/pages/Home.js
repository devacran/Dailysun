import $home from "../pug/home/home.pug";
import createPage from "../utils/createPage.js";
import HourSection from "../components/HourSection.js";
import HourSectionSkeleton from "../components/HourSectionSkeleton.js";
import Hero from "../containers/Hero.js";
import HeroSkeleton from "../containers/HeroSkeleton.js";

import { getData, getTodayData } from "../utils/network";

const Home = async () => {
  createPage($home);

  await HeroSkeleton();
  const data = await getData();
  const today = await getTodayData();
  console.log(today || "hola");
  data || today ? await Hero({ today, data }) : await HeroSkeleton();
  data ? await HourSection({ data }) : await HourSectionSkeleton();
};

export default Home;
