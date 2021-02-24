import React from "react";
import Quote from "../Quote/quote";
import "./box.css";

const Box = ({ text, author, styleId }) => {
  return (
    <div id={styleId}>
      <Quote text={text} author={author} />
    </div>
  );
};

export default Box;
