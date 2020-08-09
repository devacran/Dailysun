import AppComponent from "../utils/createComponent";
import { getMonthData } from "../utils/network";
import {
  getFirstDayOfTheMonth,
  getLastDaysOfThePreviousMonth
} from "../utils/getDates.js";
import days from "./calendar_days_delete_this.js";

const CalendarSection = () => {
  const calendarSection = new AppComponent({
    parent: "calendar-section",
    className: "calendar-section__container"
  });
  const calendarGrid = document.createElement("div");
  calendarGrid.setAttribute("class", "calendar-section__grid");
  const firstDayOfTheMonth = getFirstDayOfTheMonth();
  //debe obtenerse con getMonthData
  const todayDate = new Date();
  const dayCards = [];
  const componentStr = [];
  let calendarGridStr = [];

  const calendarHeaderStr = `
  <div class='calendar-section__header'>
    <div class='calendar-section__month-name'>
      August
    </div>
    <div class='calendar-section__day-names'>
      <div>Domingo</div>
      <div>Lunes</div>
      <div>Martes</div>
      <div>Miércoles</div>
      <div>Jueves</div>
      <div>Viernes</div>
      <div>Sabado</div>
    </div>
    </div>
  `;
  componentStr.push(calendarHeaderStr);

  if (firstDayOfTheMonth === "Sun") {
    //Si el primer dia del mes es domingo no añade tarjetas vacias
    days.forEach((day, index) => {
      dayCards.push(`
        <div class="day-card">
          <div class="day-card__imgContainer">
            <div class="day-card__img"><img></div>
          </div>
          <div class="day-card__day">${index}</div>
        </div>
        `);
    });
  } else {
    const skips = { Mon: 1, Tue: 2, Thu: 4, Wed: 3, Fri: 5, Sat: 6 }; //Para los saltos del calendario
    const previousMonthDays = getLastDaysOfThePreviousMonth(
      skips[firstDayOfTheMonth]
    );
    previousMonthDays.forEach(day => {
      dayCards.push(`
    <div class="day-card--empty">
      <div class="day-card__imgContainer">
        <div class="day-card__img"><i class="wi wi-day-sunny"></i></div>
      </div>
      <div class="day-card__day">${day}</div>
    </div>
    `);
    });
    days.forEach((day, index) => {
      dayCards.push(`
        <div class="day-card">
          <div class="day-card__imgContainer">
            <div class="day-card__img"><i class="wi wi-day-sunny"></i></div>
          </div>
          <div class="day-card__day">${index}</div>
        </div>
        `);
    });
  }
  calendarGridStr = `
    <div class='calendar-section__grid'>
    ${dayCards.join(``)}
    </div>
  `;
  componentStr.push(calendarGridStr);

  calendarSection.renderComponent(componentStr);
};
export default CalendarSection;
