import SlotScreen from "src/ui/games/slot/slot";
import type { Route } from "./+types/home";
import Slot_5 from "src/ui/games/slot/slot_5_col/slot_5";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Slot" },
    { name: "description", content: "Welcome to Online Casino!" },
  ];
}

export default function Slot() {
  return <Slot_5 />;
}
