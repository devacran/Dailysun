import config from "../../config.js";
import getGeolocation from "./getGeolocation";
import axios from "axios";
const API_URL = config.API_URL;
export const getTodayData = async city => {
  let location;
  if (city) {
    try {
      const data = await axios(`${API_URL}/weather/today`, { params: city });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  try {
    location = getGeolocation();
    const data = await axios(`${API_URL}/weather/today`, { params: location });
    return data.data.body;
  } catch (err) {
    console.log(err);
  }
};

export const getData = async city => {
  let location;
  if (city) {
    try {
      const data = await axios(`${API_URL}/weather/today`, { params: city });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  try {
    location = getGeolocation();
    const data = await axios(`${API_URL}/weather`, { params: location });
    return data.data.body;
  } catch (err) {
    console.log(err);
  }
};
