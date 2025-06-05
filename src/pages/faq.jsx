import * as React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

export default function Faq() {
  return (
    <div>
      <h1>Frequently Asked</h1>
      <h2>Hvordan fungerer spillet?</h2>
        <p>Spillet registrerer brukeren din i databasen når du registrerer deg. Etter at du trykker 'Start' og er ferdig med spillet, får du en poengsum. Denne sendes inn i databasen og vises i tabellen</p>
        <h2>Hva er rekorden?</h2>
        <p>rekorden holdes av xXfreakyLukasXx på 8000</p>
      <div className="FaqButton">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

