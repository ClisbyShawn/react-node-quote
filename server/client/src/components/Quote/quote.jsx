import React from "react";
import "./quote.css";

const Quote = ({ text, author, styleText, styleAuthor }) => {
  return (
    <div>
      <p id={styleText}>{text}</p>
      <p id={styleAuthor}>- {author}</p>
    </div>
  );
};

export default Quote;
