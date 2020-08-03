export const getFirstDayOfTheMonth = () => {
  var today = new Date();
  var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  return firstDay.toString().slice(0, 3);
};
