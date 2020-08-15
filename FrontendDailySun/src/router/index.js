import Home from "../pages/Home";
import Template from "../pages/Template";
import renderRoutes from "../utils/renderRoutes";
const router = async appState => {
  const routes = {
    "/": () => Home(appState),
    "/calendar": async () => {
      const Calendar = await import("../pages/Calendar");
      Calendar.default(appState);
    }
  };
  await Template(appState);
  renderRoutes(routes);
};

export default router;
