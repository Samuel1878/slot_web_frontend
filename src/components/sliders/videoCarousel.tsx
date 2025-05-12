import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "src/const";
import { pauseImg, playImg, replayImg } from "src/utils";

export const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video, setVideo] = useState({
        isEnd : false,
        startPlay: false, 
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });
    const [loadedData, setLoadedData] = useState([]);
    const {isEnd , isLastVideo, startPlay, videoId, isPlaying} = video;
    useGSAP(() => {
        console.log("EFFECT 1")
        gsap.to("#slider", {
            transform: `translateX(${-100 * videoId}%)`,
            duration:2,
            ease: "power2.inOut"
        });
        
        gsap.to("#video", {
          scrollTrigger:{
            trigger:"#video",
            toggleActions:"restart none none none"
          },
          onComplete: () => {
            setVideo((prev)=>({
                ...prev,
                 startPlay: true,
                 isPlaying: true
            }))
          }
        });
        
    },[isEnd, videoId]);

    useEffect(() => {
        
          console.log("EFFECT 2");
        let currentProgress = 0 ;
        let span = videoSpanRef.current;

        if(span[videoId]){
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress != currentProgress) {
                        currentProgress = progress;
                        if (!videoDivRef.current[videoId]) return;
                        gsap.to(videoDivRef.current[videoId], {
                            width: 
                                window.innerWidth < 760
                                ? "10vw" //mobile
                                :window.innerWidth < 1200
                                ? "10vw" //tablet
                                :"4vw" //laptop
                        });
                        gsap.to(span[videoId],{
                            width: currentProgress + "%",
                            backgroundColor:"white",
                        });
                    }
                },
///When the video is ended
                onComplete: () => {
                    if (isPlaying) {
                        if (!videoDivRef.current[videoId]) return;
                        gsap.to(videoDivRef.current[videoId], {
                            width:"12px",
                        });
                        gsap.to(span[videoId], {
                            backgroundColor:"#afafaf"
                        })
                    }
                }
            });

            if(videoId == 0){
                anim.restart();
            }

            const animUpdate= () => {
                if (!videoRef.current[videoId]) return;
                anim.progress(
                    videoRef.current[videoId]?.currentTime / hightlightsSlides[videoId].videoDuration
                )
            };
            if (isPlaying){
                gsap.ticker.add(animUpdate);
                return
            } else {
                gsap.ticker.remove(animUpdate);
            }
        }

    },[videoId, startPlay]);
    
    useEffect(()=>{
        console.log("EFFECT 3")
        if (loadedData.length > 3){
            if (!videoRef.current[videoId]) return;
            if(!isPlaying){
                videoRef.current[videoId].pause();
            } else {
               startPlay && videoRef.current[videoId].play();
            }
        }
    },[startPlay , videoId, isPlaying, loadedData]);

    useEffect(()=>{
        window.addEventListener("resize", handleProcess("video-reset"));
        return () => window.removeEventListener("resize", handleProcess("video-reset"));
    }, []);

    const handleLoadedMetaData = (i , e) => setLoadedData((prev)=> [...prev, e]);


    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((prev)=>({...prev, isEnd:true, videoId: i + 1}))
                break;
            case "video-last":
                setVideo((prev)=>({...prev, isLastVideo:true}))
                break;
            case "video-reset":
                setVideo((prev)=>({...prev, videoId:0, isLastVideo:false}));
                break;
            case "pause":
                setVideo((prev)=>({...prev, isPlaying:!prev.isPlaying}));
                break;
            case "play":
                setVideo((prev)=>({...prev, isPlaying:!prev.isPlaying}));
                break;
            default:
                return video;
        }
    }
    return(
    <>
        <section className="flex items-center">
            {
                hightlightsSlides?.map((list, i)=>(
                    <div key={list.id} id="slider" className="pr-10 sm:pr-20">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-neutral-900">
                                <video
                                    id="video"
                                    playsInline={true}
                                    style={{pointerEvents:"none"}}
                                    // className={`${ list.id ===2 && "translate-x-44"} pointer-events-none`}
                                    preload="auto"
                                    // style={{width:"100%", height:"100%"}}
                                    muted
                                    ref={(el)=>(videoRef.current[i] = el)}
                                    onEnded={() => {
                                        i !== 3
                                          ? handleProcess("video-end", i)
                                          : handleProcess("video-last");
                                        i === 3 && setTimeout(()=>{
                                            handleProcess("video-reset")
                                        },5000)

                                    }}
                                    onPlay={()=>setVideo((prev)=>({...prev, isPlaying:true}))}
                                    onLoadedMetadata={(e)=> handleLoadedMetaData(i, e)}
                                    >
                                        <source src={list.video} type="video/mp4"/>
                                </video>
                            </div>
                            
                            <div className="absolute top-8 left-[5%] z-10">
                                {list.textLists?.map((text, i)=> (
                                    <p key={i} className="sm:text-sm md:text-xl text-md font-medium">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }

        </section>
        <div className="relative flex-center mt-2">
            <div className="flex-center gap-1 py-3 px-4 backdrop-blur rounded-full bg-neutral-900">
                {
                    videoRef.current.map((_,i)=>(
                        <span
                            key={i}
                            className="w-3 h-3 bg-neutral-300 rounded-full relative cursor-pointer"
                            ref={(el)=>(videoDivRef.current[i] = el)}>
                                <span 
                                    ref={(el)=> (videoSpanRef.current[i] = el)}
                                    className="absolute h-full w-full rounded-full">

                                </span>
                        </span> 
                    ))
                }
            </div>
            <button className="control-btn bg-neutral-900">
                <img
                    className="w-3 h-3"
                    src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                    alt={isLastVideo? "replay": !isPlaying? "play" : "pause"}
                    onClick={isLastVideo 
                        ? ()=> handleProcess("video-reset")
                        : !isPlaying
                        ? () => handleProcess("play")
                        : () => handleProcess("pause")
                    }
                    />
            </button>
        </div>
        <section className="">
            
        </section>
    </>
    )
}
