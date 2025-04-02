import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/profile", "./routes/profile.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;


