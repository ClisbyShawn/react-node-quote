import React from "react";
import "./button.css";

const Button = ({
  label,
  onClick,
  startIcon,
  endIcon,
  styleClass,
  styleId,
}) => {
  return (
    <button className={styleClass} id={styleId} onClick={onClick}>
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

export default Button;
