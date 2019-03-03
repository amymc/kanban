import React, { useState } from "react";
import { css } from "emotion";
import { useModal } from "./Modal.context";
import { useApp } from "./App.context";
import Button from "./Button";

const taskForm = css({
  display: "flex",
  flexDirection: "column",
});

const heading = css({
  margin: "0 0 12px 0",
  fontSize: 16,
});

const input = css({
  minHeight: 32,
  border: "2px solid #e9e9ef",
  borderRadius: 5,
  padding: 5,
  margin: "5px 0",
});

const largeInput = css`
  ${input};
  min-height: 64px;
  max-width: 352px;
`;

const buttonWrapper = css({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 14,
});

const danger = css({
  marginRight: "auto",
  backgroundColor: "#ec3330",
});

const flatButton = css({
  color: "#60a7f0",
  backgroundColor: "transparent",
  marginRight: 8,
  "&:hover": {
    color: "#fff",
  },
});

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
    e.preventDefault();
    createTask(values);
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
        <Button type='submit' label='Create' />
      </div>
    </form>
  );
};

export default TaskForm;
