import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Template from "../pages/Template";
import renderRoutes from "../utils/renderRoutes";
const router = async appState => {
  const routes = {
    "/": () => Home(appState),
    "/calendar": () => Calendar(appState)
  };
  await Template(appState);
  renderRoutes(routes);
};

export default router;
