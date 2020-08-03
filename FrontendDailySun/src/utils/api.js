import config from "../../config.js";
export const getMonthData = async id => {
  API_URL = config.API_URL;
  const data = fetch(`${API_URL}/monthly/${id}`); // aun no esta lista la ruta
  //debe entregar los datos en orden
};
