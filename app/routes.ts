import { type RouteConfig, index,layout,route } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";
export default [
    layout("./layout/navbarLayout.tsx",[
      index("./routes/home.tsx"),
      route("games", "./routes/games/index.tsx"),
    ]),
    route("games/slot_5r", "./routes/games/slot/index.tsx"),
   
   
  //  ...(await flatRoutes())
] satisfies RouteConfig;


