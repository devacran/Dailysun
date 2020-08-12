import AppComponent from "../utils/createComponent";
import locationOff from "../assets/images/locationOff.png";
const UnitsSwitch = appState => {
  const unitsSwitch = new AppComponent({
    parent: "navbar_switch",
    className: "navbar_switch__container"
  });
  const units = appState.state ? appState.state.units : null;

  const componentStr = `
  <label class="switch">
    <input id='toggleUnits' type="checkbox" ${
      units === "metric" ? "checked=checked" : ""
    }/>
    <span class="slider round">F° C°</span>
  </label>
  <img src=${locationOff} alt="boton de activar, desactivar ubicación"/>
  `;
  unitsSwitch.renderComponent(componentStr);
};
export default UnitsSwitch;
