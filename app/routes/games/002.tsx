
import GameScreen from "src/ui/games/slot/002/index";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Slot" },
    { name: "description", content: "Welcome to Online Casino!" },
    {  name:"viewport",  content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}
   
  ];
}

export default function Game() {
  return <GameScreen/>;
}
