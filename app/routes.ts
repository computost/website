import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/_index.tsx", [
    index("routes/home/home.tsx"),
    route("coop", "routes/coop/coop.tsx"),
  ]),
] satisfies RouteConfig;
