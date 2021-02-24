import React from "react";
import "./title.css";

const Title = ({ title, subTitle, styleId }) => {
  return (
    <div id={styleId}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
