export const getFirstDayOfTheMonth = () => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  return firstDay.toString().slice(0, 3);
};
export const getLastDaysOfThePreviousMonth = (n = 1) => {
  let days = [];
  let d = 0;
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const lastDay = new Date(today.getFullYear(), today.getMonth(), d);
    const dayNumber = lastDay.toString().slice(8, 11);
    days.push(dayNumber);
    d--;
  }
  return days.sort();
};
export const utcToLocalTime = sec => {
  const time = new Date(0);
  time.setUTCSeconds(sec);
  const localtime = time.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true
  });
  return localtime;
};
export const utcToLocalDate = sec => {
  const time = new Date(0);
  time.setUTCSeconds(sec);
  const localDate = time.toLocaleString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return localDate;
};
export const utcToLocalTimeDay = sec => {
  const time = new Date(0);
  time.setSeconds(sec);
  const dayName = time.toString().slice(0, 3);
  switch (dayName) {
    case "Sat":
      return "Sábado";
    case "Sun":
      return "Domingo";
    case "Mon":
      return "Lunes";
    case "Tue":
      return "Martes";
    case "Wed":
      return "Miércoles";
    case "Thu":
      return "Jueves";
    case "Fri":
      return "Viernes";
  }
};
