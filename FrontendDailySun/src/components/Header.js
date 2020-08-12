import $header from "../pug/header/_header.pug";
import SearchBox from "./SearchBox";
import UnitsSwitch from "./UnitsSwitch";
import toggleUnits from "../js/toggleUnits";
async function Header(appState) {
  document.getElementById("header").innerHTML = $header;
  await UnitsSwitch(appState);
  await SearchBox(appState);
  await toggleUnits(appState);
}

export default Header;
