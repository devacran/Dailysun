import router from "./router/index.js";
import { getData, getTodayData } from "./utils/network";
import "./assets/icons/scss/weather-icons.scss";
import "./sass/styles.scss";

class State {
  constructor() {
    this.appState = {};
  }

  get state() {
    return this.appState;
  }
  set state(state) {
    load();
    this.appState = { ...this.appState, ...state };
  }
}
const appState = new State();

async function initialState(state) {
  let data, todayData;
  if (!state.state.data || !state.state.todayData) {
    try {
      data = await getData();
      todayData = await getTodayData();
    } catch (error) {
      console.log(error);
    }
    state.state = { data, todayData };
  }
}
//Para saber que ya cargo la pagina, si ya se lanza la funcion router
async function load() {
  await initialState(appState);
  await router(appState);
}
window.addEventListener("load", load); //cuando carga por primera vez
window.addEventListener("hashchange", load); //cuando hay un cambio en el hash
