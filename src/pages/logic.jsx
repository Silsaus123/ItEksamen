import React, { useState, useRef, useEffect } from "react";
import "./logic.css";

export default function Logic({x, setX, gamerun, setGamerun, Clicker}) {

  console.log(x)
    

  return (
    <div>
      <div className="boksen">
        <button className="bubble bea1" onClick={Clicker}></button>
        <button className="bubble bea2" onClick={Clicker}></button>
        <button className="bubble bea3" onClick={Clicker}></button>
      </div>
    </div>
  );
}
