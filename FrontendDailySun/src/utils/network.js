import config from "../../config.js";
import getGeolocation from "./getGeolocation";
import axios from "axios";
const API_URL = config.API_URL;
export const getTodayData = async params => {
  let locationParams;
  let cityParams;
  const city = params ? params.city : null;
  const units = params ? params.units : null;
  const location = params ? params.location : null;
  if (city) {
    try {
      cityParams = { q: city };
      const data = await axios(`${API_URL}/weather/today`, {
        params: { ...cityParams, units: units }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      locationParams = location;
      const data = await axios(`${API_URL}/weather/today`, {
        params: { ...locationParams, units }
      });
      return data.data.body;
    } catch (err) {
      console.log(err);
    }
  }
};

export const getData = async params => {
  let locationParams;
  let cityParams;
  const city = params ? params.city : null;
  const units = params ? params.units : null;
  const location = params ? params.location : null;
  if (city) {
    try {
      cityParams = { q: city };
      const data = await axios(`${API_URL}/weather/today`, {
        params: { ...cityParams, units }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  try {
    locationParams = location;
    console.log({ ...locationParams, units });
    const data = await axios(`${API_URL}/weather`, {
      params: { ...locationParams, units }
    });
    return data.data.body;
  } catch (err) {
    console.log(err);
  }
};
