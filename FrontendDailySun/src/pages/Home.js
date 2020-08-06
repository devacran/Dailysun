import $home from "../pug/home/home.pug";
import createPage from "../utils/createPage.js";
import HourSection from "../components/HourSection.js";
import { getData } from "../utils/network";

const Home = async () => {
  const { hourly } = await getData();
  console.log(hourly);
  createPage($home);
  await HourSection({ hourly: hourly });
};

export default Home;
