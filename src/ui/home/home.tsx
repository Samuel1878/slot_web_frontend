import { useEffect } from "react";
import FooterSection from "src/components/footer";
import { VideoCarousel } from "src/components/sliders/videoCarousel";
import TopGainerMini from "src/components/table/top_gainers_mini";
import { topGainers } from "src/const";
import { applePlay, googlePlay, mobileScreenSvg } from "src/utils";

const HomeScreen = () => {
  
    return (
      <>
        <main className="bg-neutral-900 flex flex-col md:px-15 md:pb-4 lg:w-full lg:py-12 lg:flex-row lg:justify-between">
          <section className="flex flex-col items-center justify-around py-4 pt-6 md:w-3/4 lg:w-2/5">
            <header className="flex items-center justify-center flex-col gap-2 md:items-start">
              <h1 className="text-3xl text-amber-400 font-sans font-semibold tracking-widest md:text-7xl">
                609,317
              </h1>
              <h1
                className="text-2xl text-neutral-100 font-sans font-bold tracking-widest md:text-7xl
"
              >
                USERS TRUST US
              </h1>
            </header>
            <div className="flex gap-4 w-full justify-center md:justify-start">
              <button className="mt-8 hidden w-full px-10 border-1 border-neutral-600 rounded-lg text-sm md:block md:w-1/2 md:h-12 text-neutral-200">
                Download
              </button>
              <button className="mt-8 h-10 px-10 rounded-lg bg-amber-300 text-sm text-neutral-950 md:h-12 md:w-4/12">
                Play Now
              </button>
            </div>
          </section>
          <TopGainerMini />
        </main>

        <section className="screen-max-width sm:p-10 p-5 sm:px-15 md:px-15 lg:px-45 bg-neutral-950 w-full justify-center items-center ">
          <VideoCarousel />
        </section>
        <section className="w-full flex flex-col items-center justify-center bg-neutral-900 py-8">
          <h3 className="text-neutral-100 text-xl font-medium">
            Play on the go. Anywhere, anytime.
          </h3>
          <img src={mobileScreenSvg} className="my-6" />
          <div className="flex flex-row gap-4 justify-center items-center">
            <button>
              <img src={applePlay} style={{ width: 150, height: 50 }} />
            </button>
            <button style={{ width: 150, height: 50 }}>
              <img src={googlePlay} />
            </button>
          </div>
        </section>
        <aside className="flex flex-col gap-4 w-full py-6 bg-neutral-800 items-center justify-center lg:py-10 lg:gap-6">
          <p className="text-lg font-mono text-neutral-50 font-bold lg:text-2xl">
            Start earning today
          </p>
          <button className="h-10 px-8 rounded-lg bg-amber-300 text-neutral-900 text-sm font-normal lg:px-12">
            Sign Up Now
          </button>
        </aside>
        <FooterSection />
      </>
    );
};
export default HomeScreen;