import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Template from "../pages/Template";
import renderRoutes from "../utils/renderRoutes";
const router = async () => {
  const routes = {
    "/": Home,
    "/calendar": Calendar
  };
  await Template();
  renderRoutes(routes);
};

export default router;
