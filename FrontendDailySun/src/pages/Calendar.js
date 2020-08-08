import $calendar from "../pug/calendar/calendar.pug";
import CalendarSection from "../components/CalendarSection";
import HeaderCalendar from "../components/HeaderCalendar";
import createPage from "../utils/createPage";
import { getTodayData } from "../utils/network";

const Calendar = async appState => {
  const data = await getTodayData();
  console.log(data);
  createPage($calendar);
  HeaderCalendar(data);
  CalendarSection();
};
export default Calendar;
