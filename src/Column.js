import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useApp } from "./App.context";
import { useModal } from "./Modal.context";
import Card from "./Card";
import Button from "./Button";

const Container = styled.div`
  width: 240px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  margin: 0 8px;
  padding-bottom: ${props => (props.canCreateTask ? "0" : "42px")};
`;

const h2 = css`
  margin: 30px 22px 18px 22px;
  font-size: 14px;
`;

const large = css`
  border-radius: 0;
`;

const Column = ({ canCreateTask, heading, tasks, stage }) => {
  const { onChange } = useApp();
  const { toggleModal } = useModal();
  debugger;

  const onClick = e => {
    e.preventDefault();
    debugger;
    onChange("stage", stage);
    onChange("currentTaskId", null);
    toggleModal();
  };

  return (
    <Container canCreateTask={canCreateTask}>
      <h2 className={h2}>{heading}</h2>
      {Object.entries(tasks).map(([id, task], index) => {
        return <Card key={index} id={id} {...task} />;
      })}
      {canCreateTask && (
        <Button label='Create Task' onClick={onClick} buttonStyle={large} />
      )}
    </Container>
  );
};

export default Column;
