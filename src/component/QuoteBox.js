import React from "react";
import { useState } from "react";
import quotes from "../quotes.json";
import Button from "./Button";

const QuoteBox = () => {
  const [quote, setQuote] = useState(quotes[getRandom()]);
  const colors = [
    "#5C1BC6",
    "#C61B46",
    "#16BF44",
    "#1631BF",
    "#7C31BD",
    "#F36302",
    "#02DBF3",
    "#E6F302",
    "#E91968",
    "#0953A9",
  ];

  const changeQuote = () => {
    setQuote(quotes[getRandom()]);
  };
  const color = colors[Math.floor(Math.random() * 9)];
  document.body.style = `background: ${color}`;

  return (
    <div className="container" style={{ color: color }}>
      <div className="card">
        <p>
          <i class="fa-solid fa-quote-left"></i>
          {quote.quote}
        </p>
        <div className="author">
          <p>{quote.author}</p>
        </div>
        <Button color={color} changeQuote={changeQuote} />
      </div>
    </div>
  );
};
const getRandom = () => Math.floor(Math.random() * quotes.length);

export default QuoteBox;
