const resolveRoute = route => {
  if (route === "/" || route === "/calendar") {
    return route;
  } else {
    return "/";
  }
};
const getHash = () =>
  location.hash
    .slice(1)
    .toLocaleLowerCase()
    .split("1")[0] || "/";

const renderRoutes = async routes => {
  let hash = await getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : "Error 404";
  await render();
};
export default renderRoutes;
