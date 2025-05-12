import { useEffect } from "react";
import FooterSection from "src/components/footer";
import { VideoCarousel } from "src/components/sliders/videoCarousel";

const HomeScreen = () => {
  
    return (
      <>
        <main className="bg-neutral-950">
          <div className="w-screen overflow-hidden h-full common-padding">
            <section className="flex flex-col items-center justify-around">
              <div className="h-20"></div>
              <header className="flex items-center justify-center flex-col gap-4">
                <h1 className="text-3xl text-amber-500 font-serif font-medium tracking-widest">
                  609,317
                </h1>
                <h1 className="text-2xl text-neutral-100 font-bold font-sans">
                  USERS TRUST US
                </h1>
              </header>
              <button className="my-4 h-10 px-10 rounded-lg bg-amber-500">
                Play Now
              </button>
            </section>
            <section className="screen-max-width">
              <VideoCarousel />
            </section>
          </div>

          {/* <article className="p-3 w-full">
            <h1 className="text-sm font-bold text-neutral-100">Announcements</h1>
        </article> */}
        </main>
        <FooterSection />
      </>
    );
};
export default HomeScreen;