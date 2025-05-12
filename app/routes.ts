import { type RouteConfig, index,layout,route } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";
export default [
  layout("./layout/navbarLayout.tsx", [
    index("./routes/home.tsx"),
    route("games", "./routes/games/index.tsx"),
  ]),
  route("games/001", "./routes/games/001.tsx"),
  route("games/002", "./routes/games/002.tsx"),

  //  ...(await flatRoutes())
] satisfies RouteConfig;


