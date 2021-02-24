import React from "react";
import Quote from "../Quote/quote";
import "./box.css";

const Box = ({ text, author, styleId, styleText, styleAuthor }) => {
  return (
    <div id={styleId}>
      <Quote
        text={text}
        author={author}
        styleText={styleText}
        styleAuthor={styleAuthor}
      />
    </div>
  );
};

export default Box;
