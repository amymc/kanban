import React from "react";
import { css } from "emotion";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";

const card = css({
  border: "1px solid gray",
  "&:hover": {
    backgroundColor: "#7858f6",
    cursor: "pointer",
  },
});

const stages = {
  backlog: "Backlog",
  inProgress: "In Progress",
  complete: "Complete",
};

const Card = ({ description, dueDate, id, title, stage }) => {
  const { onChange, updateTaskStage } = useApp();
  const { toggleModal } = useModal();
  debugger;

  const onClick = e => {
    e.stopPropagation();
    onChange("currentTaskId", id);
    toggleModal();
  };

  return (
    <div className={card}>
      <section onClick={onClick}>
        {title}
        {description}
      </section>
      {Object.entries(stages).map(
        item =>
          item !== stage &&
          (
            <button onClick={() => updateTaskStage(id, stage)}>{item}</button>
          ).filter(Boolean)
      )}
      {/* <button onClick={() => updateTaskStage(id, "backlog")}>Backlog</button>
      <button onClick={() => updateTaskStage(id, "complete")}>Complete</button> */}
    </div>
  );
};

export default Card;
