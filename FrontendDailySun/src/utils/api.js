import config from "../../config.js";
const API_URL = config.API_URL;
export const getMonthData = async id => {
  const data = fetch(`${API_URL}/monthly/${id}`); // aun no esta lista la ruta
  //debe entregar los datos en orden
};
