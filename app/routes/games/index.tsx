
import type { Route } from "./+types/home";
import GameScreen from "src/ui/games/games";
// import HomeScreen from "../../src/ui/home/home";
// import "../app.css"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Games" },
    { name: "description", content: "Welcome to Online Casino!" },
  ];
}

export default function Gamges() {
  return <GameScreen />;
}
