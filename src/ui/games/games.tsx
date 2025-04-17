import { Link } from "react-router";
import { gameList } from "../../data"
import { gsap } from "gsap";

export default function GameScreen() {
    const RenderGames = (e, i) => {
        return (
          <Link to={`/games/${e.value}`} key={i}>
            <div
              className="h-50 w-auto bg-sky-600 m-2 flex rounded-lg items-center justify-center"
            >
              <h1>{e.label}</h1>
            </div>
          </Link>
        );
    }
  return (
    <main className="flex h-screen flex-col px-4 md:6 lg:12">
      <div className="h-50 w-full">
        <h1 className="text-3xl">Games</h1>
      </div>
      <div className="w-full rounded-lg bg-neutral-800 p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
        {gameList?.map(RenderGames)}
      </div>
    </main>
  );
}
