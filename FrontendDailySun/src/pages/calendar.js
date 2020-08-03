import $calendar from "../pug/calendar/calendar.pug";

const calendar = () => {
  const app = document.getElementById("app");
  app.innerHTML = $calendar;
  const parent = document.getElementById("calendar-section");

  const dayCard = document.createElement("div");
  const days = [{ 1: "Nublado" }, { 2: "Soleado" }, { 3: "Lloviendo" }]; //Debe venir en las props
  const renderDays = [];
  let render = days.forEach((day, index) => {
    renderDays.push(`
      <div class="day-card">
        <div class="day-card__imgContainer">
          <div class="day-card__img"><img></div>
        </div>
        <div class="day-card__day">01</div>
      </div>
      `);
    //render.insertBefore(tarjeta, el nodo padre)//donde render es el calendario
  });
  dayCard.innerHTML = renderDays.join(``);
  parent.appendChild(dayCard).setAttribute("class", "calendar-section__grid");
};
export default calendar;
