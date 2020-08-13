import AppComponent from "../utils/createComponent";
import { get } from "../utils/getDates";
import close from "../assets/images/cerrar.png";
const CalendarModal = ({ data, id }) => {
  const calendarModal = new AppComponent({
    parent: "calendarModal",
    className: "calendar-section__modal-container"
  });
  const componentStr = `
  <div class='calendar-section__modal-close'>
    <a id='calendarCloseModal'><img src=${close}/></a>
  </div>
  <div class="calendar-section__modal-header">
      <div class="calendar-section__modal-img">
          <i class="wi wi-day-sunny"></i>
      </div>
      <div class="calendar-section__modal-temp">
          <div>45°C</div>
          <div>30°C</div>
      </div>
  </div>
  <div class="calendar-section__modal-info">
      <i class="wi wi-strong-wind"></i>
      <span>Viento</span>
      <span>30 Km/h</span>
      <i class="wi wi-humidity"></i>
      <span>Humedad</span>
      <span>25 %</span>
  </div>
  <div class="calendar-section__modal-date">${id} de ${data}</div>
  `;
  calendarModal.renderComponent(componentStr);
  const modal = document.getElementById("calendarModal");
  document
    .getElementById("calendarCloseModal")
    .addEventListener("click", evn => {
      modal.classList.remove("show");
      modal.classList.add("hide");
    });
};
export default CalendarModal;
