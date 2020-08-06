import router from "./router/index.js";
import "./assets/icons/scss/weather-icons.scss";
import "./sass/styles.scss";

//Para saber que ya cargo la pagina, si ya se lanza la funcion router
async function load() {
  await router();
}
window.addEventListener("load", load); //cuando carga por primera vez
window.addEventListener("hashchange", load); //cuando hay un cambio en el hash
