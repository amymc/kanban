import React from "react";
import { css } from "emotion";

const modal = css({
  position: "absolute",
  top: 10,
  left: 0,
  right: 0,
  width: 420,
  margin: "0 auto",
  padding: 34,
  backgroundColor: "#fff",
  borderRadius: 8,
  boxShadow: "0px 0px 6px grey",
});

const Modal = ({ children }) => {
  return <div className={modal}>{children}</div>;
};

export default Modal;
