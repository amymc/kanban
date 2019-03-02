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
  height: 32,
  border: "2px solid #e9e9ef",
  borderRadius: 5,
  padding: 5,
  margin: "5px 0",
});

const buttonWrapper = css({
  display: "flex",
  justifyContent: "flex-end",
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
      <input
        type='text'
        value={values.description}
        placeholder='Description'
        name='description'
        className={input}
        onChange={onChange}
      />
      <input
        type='text'
        onFocus={e => (e.currentTarget.type = "date")}
        onBlur={e => (e.currentTarget.type = "text")}
        value={values.dueDate}
        placeholder='Due on'
        name='dueDate'
        className={input}
        onChange={onChange}
        required
      />

      <div className={buttonWrapper}>
        <Button label='Delete' type='danger' onClick={e => deleteTask(e, id)} />
        {title && <Button label='Delete' onClick={e => deleteTask(e, id)} />}
        <Button label='Cancel' onClick={toggleModal} />
        <input type='submit' label='Create' />
      </div>
    </form>
  );
};

export default TaskForm;
