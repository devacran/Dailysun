import Header from "../pages/Header";
import Calendar from "../pages/Calendar";
import getHash from "../utils/getHash";
import resolveRoute from "../utils/resolveRoute";
const router = async () => {
  const routes = {
    "/": Header,
    "/calendar": Calendar
  };
  await Header();
  let hash = await getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : "Error 404";
  await render();
};

export default router;
