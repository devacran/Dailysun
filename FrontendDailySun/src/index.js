import router from "./router/index.js";
import { getData, getTodayData } from "./utils/network";
import { getGeolocation } from "./utils/getGeolocation";
import "./assets/icons/scss/weather-icons.scss";
import "./sass/styles.scss";

class State {
  constructor() {
    this.appState;
  }

  get state() {
    return this.appState;
  }
  set state(state) {
    this.appState = { ...this.appState, ...state };
    load();
  }
}
const appState = new State();

async function initialState(state) {
  let data, todayData, location, geoLocation;
  try {
    location = await getGeolocation();
    geoLocation = true;
  } catch (error) {
    geoLocation = false;
    location = {
      lat: 19.42847,
      lon: -99.12766
    };
  }
  try {
    data = await getData({
      location
    });
    todayData = await getTodayData({ location });
  } catch (error) {
    console.log(error);
  }
  state.state = {
    data,
    todayData,
    location,
    geoLocation: false,
    units: "metric"
  };
}
initialState(appState);
//Para saber que ya cargo la pagina, si ya se lanza la funcion router
async function load() {
  // !appState.state && (await initialState(appState));
  await router(appState);
}
window.addEventListener("load", load); //cuando carga por primera vez
window.addEventListener("hashchange", load); //cuando hay un cambio en el hash
