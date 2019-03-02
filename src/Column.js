import React from "react";
import { css } from "emotion";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";
import Card from "./Card";
import Button from "./Button";

const column = css({
  width: 240,
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  backgroundColor: "#fff",
  borderRadius: 16,
  margin: "0 8px",
});

const h2 = css({
  margin: "30px 22px",
});

const Column = ({ canCreateTask, heading, tasks, stage }) => {
  const { onChange } = useApp();
  const { toggleModal } = useModal();
  debugger;

  const onClick = e => {
    e.preventDefault();
    debugger;
    onChange("stage", stage);
    toggleModal();
  };

  return (
    <div className={column}>
      <h2 className={h2}>{heading}</h2>
      {Object.entries(tasks).map(([id, task], index) => {
        return <Card key={index} id={id} {...task} />;
      })}
      {canCreateTask && (
        <Button label='Create Task' onClick={onClick} type='large' />
      )}
    </div>
  );
};

export default Column;
