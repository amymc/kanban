import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";
import CardButtons from "./CardButtons";
import Calendar from "./assets/Calendar";
import { stages } from "./utils";
import { colors } from "./styleGlobals";

const Container = styled.div`
  margin: 15px 10px auto 10px;
  font-size: 12px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${props =>
    props.isCompleted ? `${colors.darkGrey}` : `${colors.white}`};
`;

const Body = styled.div`
  border: ${props =>
    `2px solid ${props.isCompleted ? "transparent" : `${colors.darkGrey}`}`};
  border-bottom: 0;
  padding: 18px 12px 14px 12px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.darkGrey};
  },
`;

const heading = css`
  margin: 0 0 15px 0;
  font-size: 12px;
`;

const subscript = css`
  font-style: italic;
  margin: 14px 0 0 0;
`;

const text = css`
  margin-left: 5px;
`;

const icon = css`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

const Card = ({ description, dueDate, id, title, stage }) => {
  const { onChange } = useApp();
  const { toggleModal } = useModal();

  const onClick = e => {
    e.stopPropagation();
    onChange("currentTaskId", id);
    toggleModal();
  };

  const isCompleted = stages[stage] === stages.completed;

  return (
    <Container isCompleted={isCompleted}>
      <Body isCompleted={isCompleted} onClick={onClick}>
        <h2 className={heading}>{title}</h2>
        {description}
        <p
          className={subscript}
          style={{ color: isCompleted ? colors.green : colors.purple }}
        >
          {isCompleted ? (
            <span className={icon}>&#10004;</span>
          ) : (
            <Calendar color={colors.purple} iconStyle={icon} />
          )}
          <span className={text}>
            {isCompleted ? `Completed` : `Due`} {dueDate.toDateString()}
          </span>
        </p>
      </Body>
      <CardButtons stage={stage} id={id} />
    </Container>
  );
};

export default Card;
