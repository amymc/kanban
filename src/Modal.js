import React, { Fragment } from "react";
import { css } from "emotion";
import { colors } from "./styleGlobals";

const modal = css`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  width: 420px;
  margin: 0 auto;
  padding: 34px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 0px 6px ${colors.lightGrey};
`;

const background = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background-color: ${colors.white};
`;

const Modal = ({ children }) => {
  return (
    <Fragment>
      <div className={background} />
      <div className={modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
