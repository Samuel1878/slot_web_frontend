import HomeScreen from "src/ui/home/home";
import type { Route } from "./+types/home";
// import HomeScreen from "../../src/ui/home/home";
// import "../app.css"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Online Slot" },
    { name: "description", content: "Welcome to Online Casino!" },
  ];
}

export default function Home() {
  return( <HomeScreen />)
}
