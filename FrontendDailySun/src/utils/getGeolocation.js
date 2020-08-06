const getGeolocation = () => {
  if (!navigator.geolocation) {
    return new Error("Geolocation is not suportted");
  }
  function success(position) {
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
  }

  navigator.geolocation.getCurrentPosition(success, err => console.error(err));
  return {
    lat: 23.7414453,
    lon: -103.98099409999999
  };
};
export default getGeolocation;
