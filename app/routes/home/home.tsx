import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { content: "Welcome to React Router!", name: "description" },
  ];
}

// export async function action({ context, request }: Route.ActionArgs) {
// }

// export async function loader({ context }: Route.LoaderArgs) {
//   return {};
// }

export default function Home(
  _ /* { actionData, loaderData } */ : Route.ComponentProps,
) {
  return <>Hello, World!</>;
}
