// const getGeolocation = () => {
//   if (!navigator.geolocation) {
//     return new Error("Geolocation is not suportted");
//   }
//   function success(position) {
//     return {
//       lat: position.coords.latitude,
//       lon: position.coords.longitude
//     };
//   }
//
//   navigator.geolocation.getCurrentPosition(success, err => console.error(err));
//   return {
//     lat: 23.7414453,
//     lon: -103.98099409999999
//   };
// };
// export default getGeolocation;
const getGeolocation = async () => {
  if (!navigator.geolocation) {
    return new Error("Geolocation is not suportted");
  }
  try {
    const location = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    console.log("LOcation is", location);
    return {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
  } catch (error) {
    console.log("Geolocalizacion error", error);
    return {
      lat: 19.42847,
      lon: -99.12766
    };
  }
};
export default getGeolocation;
