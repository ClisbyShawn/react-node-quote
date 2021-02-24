import React from "react";
import Quote from "../Quote/quote";

const Box = ({ text, author }) => {
  return (
    <div>
      <Quote text={text} author={author} />
    </div>
  );
};

export default Box;
