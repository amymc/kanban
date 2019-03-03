import React, { Fragment } from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";
import Button from "./Button";
import Calendar from "./assets/Calendar";
import { stages } from "./utils";

const Container = styled.div`
  margin: 15px 10px auto 10px;
  font-size: 12px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${props => (props.isCompleted ? "#f4f3f8" : "#fff")};
  &:hover: {
    cursor: pointer;
    background-color: #f4f3f8;
  },
`;

const Body = styled.div`
  border: ${props =>
    `2px solid ${props.isCompleted ? "transparent" : "#e9e9ef"}`};
  border-bottom: 0;
  padding: 18px 12px 14px 12px;
`;

const heading = css({
  margin: "0 0 15px 0",
  fontSize: 12,
});

const buttonWrapper = css({
  display: "flex",
});

const cardButton = css({
  width: "100%",
  borderRadius: 0,
});

const subscript = css({
  fontStyle: "italic",
  margin: "14px 0 0 0",
});

const text = css({
  marginLeft: 5,
});

const icon = css`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

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
        <Button
          buttonStyle={cardButton}
          onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
          label='Start'
        />
      );
    }
    if (stages[stage] === stages.inProgress) {
      return (
        <Fragment>
          <Button
            buttonStyle={cardButton}
            onClick={() => updateTaskStage(id, getKeyForStage(stages.backlog))}
            label='Backlog'
          />
          <Button
            buttonStyle={cardButton}
            style={{ backgroundColor: "#5bcebd" }}
            onClick={() =>
              updateTaskStage(id, getKeyForStage(stages.completed))
            }
            label='Complete'
          />
        </Fragment>
      );
    }
    return (
      <Button
        buttonStyle={cardButton}
        onClick={() => updateTaskStage(id, getKeyForStage(stages.inProgress))}
        label='Undo'
      />
    );
  };

  const isCompleted = stages[stage] === stages.completed;

  return (
    <Container isCompleted={isCompleted}>
      <Body isCompleted={isCompleted} onClick={onClick}>
        <h2 className={heading}>{title}</h2>
        {description}
        <p
          className={subscript}
          style={{ color: isCompleted ? "#5bcebd" : "#7858f6" }}
        >
          {isCompleted ? (
            <span className={icon}>&#10004;</span>
          ) : (
            <Calendar color='#7858f6' iconStyle={icon} />
          )}
          <span className={text}>
            {isCompleted ? `Completed` : `Due`} {dueDate.toDateString()}
          </span>
        </p>
      </Body>
      <div className={buttonWrapper}>{renderButtons(stage)}</div>
    </Container>
  );
};

export default Card;
