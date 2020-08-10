import config from "../../config.js";
import getGeolocation from "./getGeolocation";
import axios from "axios";
const API_URL = config.API_URL;
export const getTodayData = async city => {
  let locationParams;
  let cityParams;
  if (city) {
    try {
      cityParams = { q: city };
      const data = await axios(`${API_URL}/weather/today`, {
        params: cityParams
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      locationParams = await getGeolocation();
      const data = await axios(`${API_URL}/weather/today`, {
        params: locationParams
      });
      return data.data.body;
    } catch (err) {
      console.log(err);
    }
  }
};

export const getData = async city => {
  let locationParams;
  let cityParams;
  if (city) {
    try {
      cityParams = { q: city };
      const data = await axios(`${API_URL}/weather/today`, {
        params: cityParams
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  try {
    locationParams = await getGeolocation();
    const data = await axios(`${API_URL}/weather`, { params: locationParams });
    return data.data.body;
  } catch (err) {
    console.log(err);
  }
};
