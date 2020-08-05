import $hourSection from "../pug/home/_hour-section.pug";
import script from "../js/script.js";
const HourSection = () => {
  const parent = document.getElementById("hour-section");
  const hourCards = document.createElement("div");
  const hours = ["1", "2", "3"]; //Tiene que venir de la api
  const renderHours = [];
  hours.forEach((day, index) => {
    renderHours.push(`
      <div class='hour-section__card'>
        <div> 15%</div>
        <div class='hour-section__icon'>
          <img/>
          </div>
        <div> 3pm</div>
        </div>
      `);
  });
  hourCards.innerHTML = renderHours.join(``);
  parent.appendChild(hourCards).setAttribute("class", "hour-section__info");
  script();
};
export default HourSection;
