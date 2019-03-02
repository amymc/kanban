import React from "react";
import { css } from "emotion";
// import { css } from "@emotion/core";

const button = css`
  height: 42px;
  background-color: #60a7f0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14;
  &:hover: {
    backgroundColor: #7858f6;
    cursor: pointer;
  },
`;

const danger = css`
  margin-right: auto;
  color: #ec3330;
`;

const large = css`
  border-radius: none;
`;

const Button = ({ label, onClick, type }) => {
  return (
    <button type='button' className={button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
