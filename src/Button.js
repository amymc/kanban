import React from "react";
import { css } from "emotion";
import { colors, defaultFont } from "./styleGlobals";

const button = css`
  ${defaultFont};
  height: 42px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 14px 18px;
  &:hover {
    background-color: ${colors.purple};
    cursor: pointer;
  }
`;

const Button = ({ label, onClick, buttonStyle, style, type }) => {
  return (
    <button
      style={style}
      type={type ? type : "button"}
      className={`${button} ${buttonStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
