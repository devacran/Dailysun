import $calendar from "../pug/calendar/calendar.pug";
import CalendarSection from "../components/CalendarSection";
import HeaderCalendar from "../components/HeaderCalendar";
import createPage from "../utils/createPage";
import { getTodayData } from "../utils/network";

const Calendar = async appState => {
  if (appState.state) {
    const data = appState.state.todayData;
    createPage($calendar);
    data ? HeaderCalendar(data) : null; //Aqui hacen falta los skeletons
    CalendarSection();
  }
};
export default Calendar;
