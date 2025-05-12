
import type { Route } from "./+types/home";
import _001 from "src/ui/games/slot/001/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "game" },
    { name: "description", content: "Welcome to Online Casino!" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "mobile-web-app-capable", content: "yes" },
  ];
}

export default function GameScreen() {
  return <_001 />;
}
