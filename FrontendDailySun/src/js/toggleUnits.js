import { getData, getTodayData } from "../utils/network.js";
const toggleUnits = appState => {
  const $input = document.getElementById("toggleUnits");
  if (appState.state) {
    const location = appState.state.location;
    const currentUnits = appState.state.units;
    const units = currentUnits === "metric" ? "imperial" : "metric";
    $input.onclick = async () => {
      try {
        const data = await getData({ location, units });
        const todayData = await getTodayData({ location, units });
        appState.state = {
          ...appState.state,
          units,
          data,
          todayData
        };
      } catch (error) {
        console.log(error);
      }
      console.log("despues", appState);
    };
  }
};
export default toggleUnits;
