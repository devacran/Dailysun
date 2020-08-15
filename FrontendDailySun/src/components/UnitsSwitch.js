import AppComponent from "../utils/createComponent";
import locationOff from "../assets/images/locationOff.png";
import location from "../assets/images/location.png";
const UnitsSwitch = appState => {
  const unitsSwitch = new AppComponent({
    parent: "navbar_switch",
    className: "navbar_switch__container"
  });
  const isGeolocation = appState.state ? appState.state.geoLocation : null;
  const units = appState.state ? appState.state.units : null;

  const componentStr = `
  <label class="switch">
    <input id='toggleUnits' type="checkbox" ${
      units === "metric" ? "checked=checked" : ""
    }/>
    <span class="slider round">F° C°</span>
  </label>
  ${
    isGeolocation
      ? `<a id='geo-btn'><img src=${location} alt="boton de activar, desactivar ubicación"/></a>`
      : `<a id='geo-btn'><img src=${locationOff} alt="boton de activar, desactivar ubicación"/></a>`
  }
  `;
  unitsSwitch.renderComponent(componentStr);
};
export default UnitsSwitch;
