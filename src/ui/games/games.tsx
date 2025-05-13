import { Link } from "react-router";
import { gameList } from "../../const/index"
import { gsap } from "gsap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from "src/components/sliders/imageCarousel";
import FooterSection from "src/components/footer";


export default function GameScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchByQueryHandler = (e) => {
    e.preventDefault();;
  
   
  }
    const RenderGames = (e, i) => {
        return (
          <Link
            to={`/games/${e.value}`}
            key={i}
            // onClick={handleOrientationLock}
          >
            <div className="h-40 w-30 flex mb-2 rounded-2xl bg-neutral-600 overflow-hidden items-center justify-center">
              {e?.icon ? <img src={e.icon} style={{width:"100%", height:"100%"}}/> 
              : <p className="text-sm">Coming Soon...</p>}
            </div>
          </Link>
        );
    }
  return (
    <>
      <main className="flex h-screen flex-col bg-neutral-900">
        <div className="items-center justify-center max-h-55 sm:max-h-60 md:min-h-80 lg:max-h-100  p-4 md:p-6 lg:p-8 lg:px-12">
          <ImageSlider />
        </div>
        <div className="bg-neutral-800 gap-4 flex flex-row items-center rounded-t-3xl w-full p-3 h-auto justify-between relative">
          <form
            className="relative"
            onSubmit={searchByQueryHandler}
            style={{ width: "100%" }}
          >
            <FontAwesomeIcon
              className="input_icon"
              icon="fa fa-search"
              color="white"
            />
            <input
              placeholder="Search . . ."
              className="bg-neutral-700 w-[100%] px-4 pl-8 h-10 border-neutral-300 border-1 rounded-full focus:border-amber-400 outline-0"
              type="search"
              id="gameSearch"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <button className="px-3 h-10 bg-amber-500 rounded-full">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
          </button>
        </div>
        <div className="bg-neutral-800 relative w-full grid sm:grid-cols-4 grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-1 sm:gap-3 md:gap-4 lg:gap-6 justify-items-center">
          {/* <h4 className="absolute top-0.5 left-1">Slot Machine</h4> */}
          {gameList?.map(RenderGames)}
        </div>
      </main>
      <FooterSection/>
    </>
  );
}
