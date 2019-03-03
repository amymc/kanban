import React from "react";
import { css } from "emotion";

const button = css({
  height: 42,
  backgroundColor: "#60a7f0",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 14,
  "&:hover": {
    backgroundColor: "#7858f6",
    cursor: "pointer",
  },
});

const Button = ({ label, onClick, buttonStyle, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${button} ${buttonStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
