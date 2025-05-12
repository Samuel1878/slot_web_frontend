import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { imagesSlides } from "src/const";


const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const autoplayRef = useRef();

  const goToImage = (index) => {
    const nextIndex = (index + imagesSlides.length) % imagesSlides.length;
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: 1, ease:"bounce.out"}
    );
    setCurrent(nextIndex);
  };

  const nextImage = () => goToImage(current + 1);
  const prevImage = () => goToImage(current - 1);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [current]);

  // Touch and Mouse Drag Handling
  useEffect(() => {
    let startX = 0;
    let isDragging = false;

    const onStart = (x) => {
      startX = x;
      isDragging = true;
    };

    const onEnd = (x) => {
      if (!isDragging) return;
      const diff = x - startX;
      if (diff > 50) prevImage();
      else if (diff < -50) nextImage();
      isDragging = false;
    };

    const container = containerRef.current;

    // Touch events
    const handleTouchStart = (e) => onStart(e.touches[0].clientX);
    const handleTouchEnd = (e) => onEnd(e.changedTouches[0].clientX);

    // Mouse events
    const handleMouseDown = (e) => onStart(e.clientX);
    const handleMouseUp = (e) => onEnd(e.clientX);

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [current]);

  return (
    <div className="relative mx-auto overflow-hidden h-fit">
      <div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing select-none items-center justify-center"
      >
        <img
          ref={imageRef}
          src={imagesSlides[current]}
          alt="carousel"
          className="w-full object-cover max-h-50 sm:max-h-55 md:min-h-70 lg:max-h-90 rounded-xl pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Arrows */}
      {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
        <button onClick={prevImage} className="bg-white/70 px-3 py-1 rounded">
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
        <button onClick={nextImage} className="bg-white/70 px-3 py-1 rounded">
          ›
        </button>
      </div> */}

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {imagesSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { imagesSlides } from "src/const";

// const ImageCarousel = () => {
//   const [current, setCurrent] = useState(0);
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const autoplayRef = useRef();

//   const transitionTo = (next) => {
//     gsap.fromTo(imageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
//     setCurrent((next + imagesSlides.length) % imagesSlides.length);
//   };

//   const nextImage = () => transitionTo(current + 1);
//   const prevImage = () => transitionTo(current - 1);

//   // Autoplay
//   useEffect(() => {
//     autoplayRef.current = setInterval(() => {
//       nextImage();
//     }, 3000);
//     return () => clearInterval(autoplayRef.current);
//   }, [current]);

//   // Drag/swipe
//   useEffect(() => {
//     let startX = 0;

//     const handleTouchStart = (e) => (startX = e.touches[0].clientX);
//     const handleTouchEnd = (e) => {
//       const diff = e.changedTouches[0].clientX - startX;
//       if (diff > 50) prevImage();
//       else if (diff < -50) nextImage();
//     };

//     const container = containerRef.current;
//     container.addEventListener('touchstart', handleTouchStart);
//     container.addEventListener('touchend', handleTouchEnd);

//     return () => {
//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [current]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full mx-auto overflow-hidden"
//     >
//       <img
//         ref={imageRef}
//         key={current}
//         src={imagesSlides[current]}
//         alt="carousel"
//         className="w-full h-full object-cover rounded-xl select-none"
//         draggable={false}
//       />
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
//         <button onClick={prevImage} className="bg-white/70 px-3 py-1 rounded">‹</button>
//       </div>
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
//         <button onClick={nextImage} className="bg-white/70 px-3 py-1 rounded">›</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

// // const ImageSlider = () => {
// //   const sliderRef = useRef(null);
// //   const [index, setIndex] = useState(0);

// //   const slideTo = (newIndex) => {
// //     const slider = sliderRef.current;
// //     const width = slider.offsetWidth;

// //     gsap.to(slider, {
// //       x: -width * newIndex,
// //       duration: 1,
// //       ease: "power2.inOut",
// //     });

// //     setIndex(newIndex);
// //   };

// //   const nextSlide = () => {
// //     slideTo((index + 1) % images.length);
// //   };

// //   const prevSlide = () => {
// //     slideTo((index - 1 + images.length) % images.length);
// //   };

// //   useEffect(() => {
// //     // Set initial position
// //     gsap.set(sliderRef.current, { x: 0 });
// //   }, []);

// //   return (
// //     <div className="overflow-hidden relative w-full max-h-35 rounded-xl">
// //       <div
// //         ref={sliderRef}
// //         className="flex transition-all duration-700"
// //         style={{ width: `${imagesSlides.length * 100}%` }}
// //       >
// //         {imagesSlides.map((src, i) => (
// //           <img
// //             key={i}
// //             src={src}
// //             className="max-h-35 w-full"
// //             alt={`slide-${i}`}
// //           />
// //         ))}
// //       </div>
// //       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
// //         <button onClick={prevSlide}>⬅️</button>
// //         <button onClick={nextSlide}>➡️</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageSlider;
