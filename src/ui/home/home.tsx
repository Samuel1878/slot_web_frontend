import { useEffect } from "react";
import FooterSection from "src/components/footer";
import { VideoCarousel } from "src/components/sliders/videoCarousel";

const HomeScreen = () => {
  
    return (
      <>
        <main className="bg-neutral-950">
          <div className="w-screen overflow-hidden h-full common-padding">
            <section className="screen-max-width">
              <VideoCarousel />
            </section>
          </div>

          {/* <article className="p-3 w-full">
            <h1 className="text-sm font-bold text-neutral-100">Announcements</h1>
        </article> */}
        </main>
        <FooterSection/>
      </>
    );
};
export default HomeScreen;