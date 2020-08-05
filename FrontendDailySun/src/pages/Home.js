import $home from "../pug/home/home.pug";
import HourSection from "../components/HourSection.js";
function Home() {
  let rendered = false;
  const app = document.getElementById("app");
  const el = document.createElement("div");
  el.innerHTML = $home;
  app.appendChild(el);
  !rendered && HourSection();
  rendered = true;
}

export default Home;
