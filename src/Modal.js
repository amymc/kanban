import React, { Fragment } from "react";
import { css } from "emotion";

const modal = css({
  position: "absolute",
  top: 40,
  left: 0,
  right: 0,
  width: 420,
  margin: "0 auto",
  padding: 34,
  backgroundColor: "#fff",
  borderRadius: 8,
  boxShadow: "0px 0px 6px grey",
});

const background = css({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  backgroundColor: "#fff",
});

const Modal = ({ children }) => {
  return (
    <Fragment>
      <div className={background} />
      <div className={modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
