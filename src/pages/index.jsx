import React, { useState, useRef, useEffect } from "react";
import Logic from "./logic.jsx";
import DataTable from "./data.jsx";
import "./Index.css";
import GameStart from "./gameStart.jsx";
import LogIn from "./logIn.jsx";
import { Link } from 'react-router-dom';




const IndexPage = () => {
  const [x, setX] = useState(0);
  const [gamerun, setGamerun] = useState(false);
  const [time, setTime] = useState(5);
  const timerID = useRef(null);
  const [userId, setUserId] = useState(null)

  const Clicker = () => {
    if (gamerun) {
        setX(prev => prev + 1);
        }
    };


  
  return (
    <div>
      <LogIn
        userId={userId}
        setUserId={setUserId}
      />
    <div className="LogicDataContainer">
      <div className="GameStartContainer">
        <GameStart 
          x={x} 
          setX={setX} 
          gamerun={gamerun} 
          setGamerun={setGamerun} 
          time={time} setTime={setTime} 
          timerID={timerID} 
          Clicker={Clicker} 
          userId={userId}
          setUserId={setUserId}
          />
      </div>
      <div className="LogicContainer">
        <Logic x={x} setX={setX} gamerun={gamerun} setGamerun={setGamerun} time={time} setTime={setTime} timerID={timerID} Clicker={Clicker}/>
      </div>
      <div className="DataContainer">
        <DataTable />
      </div>
      <div className="FaqButton">
        <link to ="/faq">Go to FAQ</link>
        {/* link faq knap og skriv*/}
      </div>
    </div>
    </div>

  );
};

export default IndexPage;

