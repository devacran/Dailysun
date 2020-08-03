import $header from "../pug/header/_header.pug";

function header() {
  const app = document.getElementById("app");
  app.innerHTML = $header;
}

export default header;
