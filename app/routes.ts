import { index, layout, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/_index.tsx", [index("routes/home/home.tsx")]),
] satisfies RouteConfig;
