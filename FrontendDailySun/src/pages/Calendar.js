import $calendar from "../pug/calendar/calendar.pug";
import { getMonthData } from "../utils/api";
import { getFirstDayOfTheMonth } from "../utils/getDates.js";
import days from "./calendar_days_delete_this.js";
import createPage from "../utils/createPage";
const Calendar = () => {
  createPage($calendar);
  const parent = document.getElementById("calendar-section");
  const dayCard = document.createElement("div");
  const firstDayOfTheMonth = getFirstDayOfTheMonth();
  //debe obtenerse con getMonthData
  const todayDate = new Date();
  const renderDays = [];
  if (firstDayOfTheMonth === "Sun") {
    //Si el primer dia del mes es domingo no añade tarjetas vacias
    days.forEach((day, index) => {
      renderDays.push(`
        <div class="day-card">
          <div class="day-card__imgContainer">
            <div class="day-card__img"><img></div>
          </div>
          <div class="day-card__day">${index}</div>
        </div>
        `);
    });
  } else {
    const skips = { Mon: 1, Tue: 2, Thu: 4, Wed: 3, Fri: 5, Sat: 6 };
    console.log(firstDayOfTheMonth);
    console.log(skips[firstDayOfTheMonth]);
    for (let i = 0; i < skips[firstDayOfTheMonth]; i++) {
      renderDays.push(`
        <div class="day-card--empty">
        </div>
        `);
    }
    //borrar let render
    days.forEach((day, index) => {
      renderDays.push(`
        <div class="day-card">
          <div class="day-card__imgContainer">
            <div class="day-card__img"><img></div>
          </div>
          <div class="day-card__day">${index}</div>
        </div>
        `);
    });
  }

  dayCard.innerHTML = renderDays.join(``);
  parent.appendChild(dayCard).setAttribute("class", "calendar-section__grid");
};
export default Calendar;
