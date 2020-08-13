const getGeolocation = async () => {
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
    console.log("Geolocalizacion error", error);
    throw new Error("Geolocation was not enabled");
  }
};
export default getGeolocation;
