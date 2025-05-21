import * as React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

export default function Faq() {
  return (
    <div>
      <h1>Frequently Asked</h1>
      <div className="FaqButton">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

