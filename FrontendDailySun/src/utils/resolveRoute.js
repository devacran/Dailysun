const resolveRoute = route => {
  if (route === "/" || route === "/calendar") {
    return route;
  } else {
    return "/";
  }
};

export default resolveRoute;
