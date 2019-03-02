import React, { Fragment } from "react";
import { css } from "emotion";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";
import { stages } from "./utils";

const card = css({
  border: "1px solid gray",
  "&:hover": {
    backgroundColor: "#7858f6",
    cursor: "pointer",
  },
});

const body = css({
  padding: "18px 14px 14px 14px",
});

const Card = ({ description, dueDate, id, title, stage }) => {
  const { onChange, updateTaskStage } = useApp();
  const { toggleModal } = useModal();

  const onClick = e => {
    e.stopPropagation();
    onChange("currentTaskId", id);
    toggleModal();
  };

  const getKeyForStage = stage =>
    Object.keys(stages).find(key => stages[key] === stage);

  const renderButtons = stage => {
    if (stages[stage] === stages.backlog) {
      return (
        <button
          onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
        >
          Start
        </button>
      );
    }
    if (stages[stage] === stages.inProgress) {
      return (
        <Fragment>
          <button
            onClick={() => updateTaskStage(id, getKeyForStage(stages.backlog))}
          >
            Backlog
          </button>
          <button
            onClick={() =>
              updateTaskStage(id, getKeyForStage(stages.completed))
            }
          >
            Completed
          </button>
        </Fragment>
      );
    }
    return (
      <button
        onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
      >
        Undo
      </button>
    );
  };

  return (
    <div className={card}>
      <section className={body} onClick={onClick}>
        {title}
        {stages[stage] === stages.completed ? `Completed` : `Due`}{" "}
        {new Date(dueDate).toDateString()}
        {description}
      </section>
      {renderButtons(stage)}
    </div>
  );
};

export default Card;
