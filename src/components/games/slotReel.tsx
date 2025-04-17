import React, { useRef } from "react";
import gsap from "gsap";

const symbols = ["🍒", "🍋", "💎", "🍊", "7️⃣","🔔", "🍇", "⭐", "🍉"];

const SlotReel = () => {
  const reelRef = useRef(null);
  const symbolHeight = 80;
  const gap = 20;
  const totalHeight = (symbolHeight + gap) * symbols.length;

  const spinReel = (spins = 6, stopIndex = 1) => {
    const fullSpin = spins * totalHeight;
    const stopOffset = stopIndex * (symbolHeight + gap);

    gsap.to(reelRef.current, {
      y: -(fullSpin + stopOffset),
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        console.log(`Stopped at: ${symbols[stopIndex]}`);
      },
    });
  };

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    spinReel(5, randomIndex);
  };

  return (
    <div style={styles.slotContainer}>
      <div style={styles.reelWrapper}>
        <div style={styles.reel} ref={reelRef}>
          {symbols.concat(symbols).map((symbol, i) => (
            <div key={i} style={styles.symbol}>
              {symbol}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSpin} style={styles.button}>
        Spin
      </button>
    </div>
  );
};

const styles = {
  slotContainer: {
    textAlign: "center",
    padding: "20px",
  },
  reelWrapper: {
    width: "100px",
    height: "100px",
    overflow: "hidden",
    border: "2px solid #333",
    margin: "0 auto",
  },
  reel: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  symbol: {
    height: "80px",
    fontSize: "40px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default SlotReel;
