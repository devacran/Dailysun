const createPage = component => {
  const app = document.getElementById("app");
  const el = document.createElement("div");
  el.innerHTML = component;
  return app.appendChild(el);
};
export default createPage;
