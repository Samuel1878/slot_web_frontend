import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import lemon from "../Assets/Images/sym_lemon.png";
import orange from "../Assets/Images/sym_orange.png";
import plum from "../Assets/Images/sym_plum.png";
import background from "../Assets/Images/Background.png";
import frame from "../Assets/Images/frame.png";
import spritesheet from "../Assets/Images/sym_anim.png";
import spritesheetData from "../Assets/Images/sym_anim.json";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SpinPay from "../Assets/Sounds/SpinPay.wav?version=1.0";
import Win from "../Assets/Sounds/Win.wav?version=1.0";
import BackgroundMelody from "../Assets/Sounds/BackgroundMelody.wav";
import Winner1 from "../Assets/Images/winner.png";
import BigWinner from "../Assets/Images/BigWinner.png";
import MegaWinner from "../Assets/Images/MEGAwinner.png";

function getRandomElement() {
  const items = [
    <img src={lemon} alt="lemon" id="1" />,
    <img src={orange} alt="orange" id="2" />,
    <img src={plum} alt="plum" id="3" />,
  ];
  const randomElement = items[Math.floor(Math.random() * items.length)];
  return randomElement;
}

function generateNewReels() {
  const newReels = [];
  for (let i = 0; i < 3; i++) {
    const reel1 = getRandomElement();
    const reel2 = getRandomElement();
    const reel3 = getRandomElement();
    newReels.push({ reel1, reel2, reel3 });
  }
  return newReels;
}

function NewMachine() {
  const [reels, setReels] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState("");
  const [startingMessage, setStartingMessage] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const buttonSpaceBar = useRef();
  const BackgroundMusic = new Audio(BackgroundMelody);
  const [spacebarPressed, setSpacebarPressed] = useState(false);
  const winSoundRef = useRef(null);
  const spinPaySoundRef = useRef(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  BackgroundMusic.volume = 0.1;
  BackgroundMusic.loop = true;
  BackgroundMusic.play();

  const handleSpacebar = (event) => {
    if (event.code === "Space" && !spacebarPressed) {
      event.preventDefault();
      buttonSpaceBar.current.click();
      setSpacebarPressed(true);
    }
  };

  const handleSpacebarUp = (event) => {
    if (event.code === "Space") {
      setSpacebarPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebar);
    window.addEventListener("keyup", handleSpacebarUp);
    return () => {
      window.removeEventListener("keydown", handleSpacebar);
      window.removeEventListener("keyup", handleSpacebarUp);
    };
  }, [spacebarPressed]);

  useEffect(() => {
    setReels(generateNewReels());
    const winSound = new Audio(Win);
    const spinPaySound = new Audio(SpinPay);
    winSoundRef.current = winSound;
    spinPaySoundRef.current = spinPaySound;
  }, []);

  function checkForWin() {
    const reel1 = document.querySelectorAll(".reel1");
    const reel2 = document.querySelectorAll(".reel2");
    const reel3 = document.querySelectorAll(".reel3");
    let message = "Try again!";
    let winningCombinations = [];
    let winRowCount = 0;
    const winSound = winSoundRef.current;
    const addWinningElement = (element, reelColumn, reelRow) => {
      if (element !== false && element !== null) {
        const alt = element.querySelector("img")?.getAttribute("alt");
        if (alt) {
          winningCombinations.push({
            winningElement: alt,
            reelColumn: reelColumn,
            reelRow: reelRow,
          });
        }
      }
    };
    if (
      reel1[0].innerHTML === reel2[0].innerHTML &&
      reel2[0].innerHTML === reel3[0].innerHTML
    ) {
      addWinningElement(reel1[0], 1, 1);
      message = "You win!";
      winSoundRef.current.currentTime = 0;
      winSound.play();
      winRowCount++;
    }
    if (
      reel1[1].innerHTML === reel2[1].innerHTML &&
      reel2[1].innerHTML === reel3[1].innerHTML
    ) {
      addWinningElement(reel1[1], 2, 2);
      message = "You win!";
      winSoundRef.current.currentTime = 0;
      winSound.play();
      winRowCount++;
    }
    if (
      reel1[2].innerHTML === reel2[2].innerHTML &&
      reel2[2].innerHTML === reel3[2].innerHTML
    ) {
      addWinningElement(reel1[2], 3, 3);
      message = "You win!";
      winSoundRef.current.currentTime = 0;
      winSound.play();
      winRowCount++;
    }
    setMessage(message);
    if (winningCombinations.length > 0) {
      setIsWin(true);
    }
    if (winRowCount == 1) {
      setWinner(Winner1);
    } else if (winRowCount == 2) {
      setWinner(BigWinner);
    } else if (winRowCount == 3) {
      setWinner(MegaWinner);
    }
    return winningCombinations;
  }

  function stopSpin() {
    const reel1 = document.querySelectorAll(".reel1");
    const reel2 = document.querySelectorAll(".reel2");
    const reel3 = document.querySelectorAll(".reel3");
    gsap.killTweensOf([reel1, reel2, reel3]);
    gsap.set([reel1, reel2, reel3], { y: 0 });
    setIsSpinning(false);
    checkForWin();
    winningAnimation(checkForWin());
  }

  function autoPlay() {
    setIsAutoPlay(true);
    Spin();
    const timeoutId = setTimeout(() => {
      setIsAutoPlay(false);
    }, 60000);

    const intervalId = setInterval(() => {
      setMessage("Good Luck!");
      Spin();
    }, 1500);

    setTimeoutId(timeoutId);
    setIntervalId(intervalId);
  }

  function stopAutoPlay() {
    setIsAutoPlay(false);
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  }

  function HandleSpinClick() {
    if (!isSpinning) {
      Spin();
      setMessage("Good Luck!");
    } else {
      stopSpin();
    }
  }

  function winningAnimation(winningCombinations) {
    const image = new Image();
    image.src = spritesheet;
    image.onload = () => {
      const frames = spritesheetData.frames;
      const imageNames = {
        lemon: [
          "sym_lemon_002",
          "sym_lemon_003",
          "sym_lemon_004",
          "sym_lemon_005",
          "sym_lemon_006",
          "sym_lemon_007",
          "sym_lemon_008",
          "sym_lemon_009",
          "sym_lemon_010",
          "sym_lemon_011",
          "sym_lemon_012",
          "sym_lemon_013",
        ],
        orange: [
          "sym_orange_002",
          "sym_orange_003",
          "sym_orange_004",
          "sym_orange_005",
          "sym_orange_006",
          "sym_orange_007",
          "sym_orange_008",
          "sym_orange_009",
          "sym_orange_010",
          "sym_orange_011",
          "sym_orange_012",
          "sym_orange_013",
        ],
        plum: [
          "sym_plum_002",
          "sym_plum_003",
          "sym_plum_004",
          "sym_plum_005",
          "sym_plum_006",
          "sym_plum_007",
          "sym_plum_008",
          "sym_plum_009",
          "sym_plum_010",
          "sym_plum_011",
          "sym_plum_012",
          "sym_plum_013",
        ],
      };
      const spriteAnimation = gsap.timeline({ repeat: -1 });
      const timeline = gsap.timeline({ repeat: -1 });
      winningCombinations.forEach((combo) => {
        let spritesInCombo = [];
        const reel = document.querySelectorAll(`.reel1`)[0];
        const { top, height } = reel.children[0].getBoundingClientRect();
        const { left, width } = reel.children[0].getBoundingClientRect();
        const elementName = combo.winningElement;

        if (!imageNames[elementName]) {
          return;
        }

        imageNames[elementName].forEach((imageName, index) => {
          const frame = frames[imageName];
          const spriteWidth = frame.frame.w;
          const spriteHeight = frame.frame.h;

          for (let i = combo.reelRow - 1; i < combo.reelRow + 2; i++) {
            const x = frame.frame.x;
            const y = frame.frame.y;
            const sprite = document.createElement("div");
            sprite.style.position = "fixed";
            sprite.style.width = spriteWidth + "px";
            sprite.style.height = spriteHeight + "px";
            sprite.style.backgroundImage = `url(${spritesheet})`;
            sprite.style.backgroundPosition = `-${x}px -${y}px`;
            sprite.style.transform = "scale(0.75)";
            sprite.style.opacity = 0;
            document.body.appendChild(sprite);
            spritesInCombo.push(sprite);

            timeline.to(sprite, {
              top: top + combo.reelRow * height - 152,
              left: left + (i - combo.reelRow) * width * 1.15 + 115 + i,
              duration: 0,
            });
          }
        });
        const tween = gsap.to(spritesInCombo, {
          opacity: 1,
          duration: 0.07,
          stagger: 0.018,
          repeat: -1,
          yoyo: true,
        });

        spriteAnimation.add(timeline, 0);
        spriteAnimation.add(tween, 0);

        spriteAnimation.to(spritesInCombo, {
          opacity: 0,
          duration: 0.8,
        });
      });
    };
  }

  function Spin() {
    document.querySelectorAll("div[style*='fixed']").forEach((sprite) => {
      sprite.remove();
    });
    const spinPay = spinPaySoundRef.current;
    spinPay.volume = 0.3;
    spinPaySoundRef.current.currentTime = 0;
    spinPay.play();
    const reel1 = document.querySelectorAll(".reel1");
    const reel2 = document.querySelectorAll(".reel2");
    const reel3 = document.querySelectorAll(".reel3");
    const lapCount = Math.floor(Math.random() * 2) + 1;
    let numberOfSpins = 0;
    setIsSpinning(true);
    setStartingMessage(false);
    setIsWin(false);
    const updateReelElements = (reel, currentLap) => {
      if (reel === reel1 && currentLap <= lapCount) {
        reel.forEach((el) => {
          const newElement = getRandomElement();
          el.innerHTML = `<img src="${newElement.props.src}" alt="${newElement.props.alt}" />`;
        });
      } else if (reel === reel2 && currentLap <= lapCount) {
        reel.forEach((el) => {
          const newElement = getRandomElement();
          el.innerHTML = `<img src="${newElement.props.src}" alt="${newElement.props.alt}" />`;
        });
      } else if (reel === reel3 && currentLap <= lapCount) {
        reel.forEach((el) => {
          const newElement = getRandomElement();
          el.innerHTML = `<img src="${newElement.props.src}" alt="${newElement.props.alt}" />`;
        });
      }
    };

    const spinReel = (reel, onComplete) => {
      let currentLap = 0;
      let ticker = null;
      ticker = gsap.ticker.add(() => {
        currentLap++;
        updateReelElements(reel, currentLap);
        if (currentLap >= lapCount || !isSpinning) {
          gsap.ticker.remove(ticker);
          onComplete();
        }
      });

      gsap.to(reel, {
        duration: 0.07,
        y: "+=240",
        ease: "none",
        delay: 0,
        onComplete: () => {
          gsap.set(reel, { y: "-240" });

          gsap.to(reel, {
            duration: 0.25,
            y: "+=500",
            ease: "none",
            delay: 0,
            onComplete: () => {
              gsap.set(reel, { y: "-240px" });

              gsap.to(reel, {
                duration: 0.07,
                y: "+=240",
                ease: "none",
                delay: 0,
                onComplete: () => {
                  onComplete();
                },
              });
            },
          });
        },
      });
    };
    spinReel(reel1, () => {
      numberOfSpins++;
      spinReel(reel2, () => {
        numberOfSpins++;
        spinReel(reel3, () => {
          numberOfSpins++;
          if (numberOfSpins === 14) {
            //fixing bug with the numberOfSpins
            setIsSpinning(false);
            gsap.killTweensOf([reel1, reel2, reel3]);
            gsap.set([reel1, reel2, reel3], { y: 0 });
            checkForWin();
            winningAnimation(checkForWin());
          }
        });
      });
    });
  }
  return (
    <main>
      <div
        className="flex-col h-screen justify-center m-auto content-center bg-center bg-no-repeat max-h-screen overflow-y-auto"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div style={{ transform: "scale(0.5)" }}>
          <div
            className={
              isWin
                ? "absolute justify-center text-center w-96 h-28 bg-no-repeat animate-bounce rounded-full overflow-hidden bg-contain lg:left-1/3 lg:ml-16 top-10"
                : "hidden"
            }
            style={{ backgroundImage: `url(${winner})` }}
          ></div>
        </div>
        <div className="Message text-center pt-24"></div>
        <Alert
          variant="filled"
          severity={startingMessage ? "info" : "success"}
          className="w-96 text-lg content-center m-auto mb-5"
        >
          {startingMessage
            ? "Click the PLAY button to start or spacebar!"
            : message}
        </Alert>
        <div className="overflow-hidden">
          <table
            className="relative mx-auto"
            style={{
              backgroundImage: `url(${frame})`,
              backgroundSize: "cover",
            }}
          >
            <tbody>
              {reels.map((e, i) => (
                <tr key={i}>
                  <td className="reel1 lg:w-32 w-28" id="reel-1">
                    {e.reel1}
                  </td>
                  <td className="reel2 lg:w-36 w-32 pl-4" id="reel-2">
                    {e.reel2}
                  </td>
                  <td className="reel3 lg:w-36 w-32 pl-4" id="reel-3">
                    {e.reel3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={
            isAutoPlay ? "collapse h-5" : "content-center text-center mt-5"
          }
        >
          <Button
            ref={buttonSpaceBar}
            variant="contained"
            size="large"
            onClick={HandleSpinClick}
            color={isSpinning ? "error" : "success"}
            disabled={isAutoPlay}
          >
            {isSpinning ? "STOP" : "PLAY"}
          </Button>
        </div>
        <div
          className={
            isAutoPlay
              ? "content-center text-center rounded-full"
              : "content-center text-center rounded-full mt-5"
          }
        >
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={isAutoPlay ? stopAutoPlay : autoPlay}
          >
            {isAutoPlay ? "Auto is ON" : "Auto is OFF"}
          </Button>
        </div>
      </div>
    </main>
  );
}
export default NewMachine;
