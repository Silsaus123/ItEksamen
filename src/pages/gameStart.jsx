import React, { useState, useRef, useEffect } from "react";

export default function GameStart({x, setX, gamerun, setGamerun, time, setTime, timerID, Clicker, userId, setUserId}) {
      useEffect(() => {
        if (gamerun && time > 0) {
          timerID.current = setTimeout(() => {
            setTime(prevTime => prevTime - 1);
          }, 1000);
        } else if (gamerun && time === 0) {
          setGamerun(false);
          sendScoreToServer()
        }
        return () => clearTimeout(timerID.current);
        
      }, [gamerun, time]);


      const clearGame = () => {
        clearTimeout(timerID.current);
        setX(0);
        setTime(5);
        setGamerun(false);
      };

      const sendScoreToServer = async () => {
        try {
          console.log(x +" | " + userId)
          const response = await fetch("/api/updateScore", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId,
              score: x,
            }),
          });

          const data = await response.json();
          if (!response.ok) {
            alert(`❌ Failed to save score: ${data.error}`);
          } else {
            alert("✅ Score saved successfully!");
            setUserId(data.userId)
          }
        } catch (error) {
          console.error("Error saving score:", error);
          alert("💥 Failed to connect to server.");
        }
      };
    
      const start = () => {
        if (!gamerun) {
          setGamerun(true);
        } else {
          setGamerun(false);
          clearTimeout(timerID.current);
        }
      };



    return(
        <div className={"Buttons"}style={{ marginBottom: "20px" }}>
        <p>Time: {time}</p>
        <button onClick={start}>Start / Stop</button>
        <button onClick={clearGame}>Clear</button>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>{x}</div>
      </div>
    )
}