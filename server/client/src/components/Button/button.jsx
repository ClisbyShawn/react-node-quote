import React from "react";

const Button = ({ label, onClick, startIcon, endIcon }) => {
  return (
    <button onClick={onClick}>
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

export default Button;
