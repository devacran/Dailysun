import axios from "axios";
export const getGeolocation = async () => {
  if (!navigator.geolocation) {
    return new Error("Geolocation is not suportted");
  }
  try {
    let ifNotResponse;
    const location = await new Promise((resolve, reject) => {
      ifNotResponse = window.setTimeout(() => {
        reject("Geolocation was not enabled");
      }, 5000);
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    clearTimeout(ifNotResponse);
    return {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
  } catch (error) {
    throw new Error("Geolocation was not enabled");
  }
};

export const getIPLocation = async () => {
  try {
    const ipInfo = await axios("https://api.ipify.org/?format=json");
    const ip = ipInfo.data.ip;
    const url = `http://api.ipstack.com/${ip}`;
    const location = await axios(url, {
      params: {
        access_key: "048b501bf6aa1d53ffa674505cdca711"
      }
    });
    return {
      lat: location.data.latitude,
      lon: location.data.longitude
    };
  } catch (error) {
    throw new Error("Couldn't get IP location");
  }
};
