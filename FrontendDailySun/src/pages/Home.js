import $home from "../pug/home/home.pug";
import createPage from "../utils/createPage.js";
import HourSection from "../components/HourSection.js";
import HourSectionSkeleton from "../components/HourSectionSkeleton.js";
import Hero from "../containers/Hero.js";
import HeroSkeleton from "../containers/HeroSkeleton.js";

import { getData, getTodayData } from "../utils/network";

const Home = async appState => {
  createPage($home);
  await HeroSkeleton(); //Si aun no hay estado muestra el Loading....
  if (appState.state) {
    const data = appState.state.data;
    const today = appState.state.todayData;
    const units = appState.state.units;
    data || today
      ? await Hero({ today, data, units })
      : await HeroSkeleton("error");
    data ? await HourSection({ data }) : await HourSectionSkeleton("error");
  }
};

export default Home;
