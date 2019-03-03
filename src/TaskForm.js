import React, { useState } from "react";
import { css } from "emotion";
import { useModal } from "./Modal.context";
import { useApp } from "./App.context";
import Button from "./Button";
import { colors } from "./styleGlobals";

const taskForm = css`
  display: flex;
  flex-direction: column;
`;

const heading = css`
  margin: 0 0 12px 0;
  font-size: 16px;
`;

const input = css`
  min-height: 32px;
  border: 2px solid ${colors.darkGrey};
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0;
`;

const largeInput = css`
  ${input};
  min-height: 64px;
  max-width: 352px;
`;

const buttonWrapper = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;

const danger = css`
  margin-right: auto;
  background-color: ${colors.red};
`;

const flatButton = css`
  color: ${colors.blue};
  background-color: transparent;
  margin-right: 8px;
  &:hover {
    color: ${colors.white};
  }
`;

const TaskForm = ({ title, description, dueDate, id }) => {
  const { toggleModal } = useModal();
  const { createTask, deleteTask } = useApp();
  debugger;

  const [values, setValues] = useState({
    title: title || "",
    description: description || "",
    dueDate: dueDate || "",
  });

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onDelete = () => {
    debugger;
    deleteTask(id);
    toggleModal();
  };

  const onSubmit = e => {
    debugger;
    e.preventDefault();
    createTask(values, id);
    toggleModal();
  };

  return (
    <form className={taskForm} onSubmit={onSubmit}>
      <h1 className={heading}> {title ? `Edit task` : `Create New Task`} </h1>
      <input
        type='text'
        value={values.title}
        placeholder='Title'
        name='title'
        className={input}
        onChange={onChange}
        required
      />
      <textarea
        type='text'
        value={values.description}
        placeholder='Description'
        name='description'
        className={largeInput}
        onChange={onChange}
      />
      <input
        type='text'
        onFocus={e => (e.currentTarget.type = "date")}
        onBlur={e => (e.currentTarget.type = "text")}
        value={values.dueDate.toLocaleString().split(",")[0]}
        placeholder='Due on'
        name='dueDate'
        className={input}
        onChange={onChange}
        required
      />

      <div className={buttonWrapper}>
        {title && (
          <Button label='Delete' buttonStyle={danger} onClick={onDelete} />
        )}
        <Button label='Cancel' buttonStyle={flatButton} onClick={toggleModal} />
        {title ? (
          <Button type='submit' label='Save' />
        ) : (
          <Button type='submit' label='Create' />
        )}
      </div>
    </form>
  );
};

export default TaskForm;
