import $header from "../pug/header/_header.pug";
import SearchBox from "./SearchBox";
async function Header(appState) {
  document.getElementById("header").innerHTML = $header;
  await SearchBox(appState);
}

export default Header;
