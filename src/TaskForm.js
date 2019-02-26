import React, { useState } from 'react';
import { css } from 'emotion';
import { useModal } from './Modal.context';
import { useApp } from './App.context';
import Button from './Button';

const taskForm = css({
  display: 'flex',
  flexDirection: 'column',
});

const TaskForm = () => {
  debugger
  const { toggleModal } = useModal();
  const { createTask } = useApp();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

    return (
      <div className={taskForm}>
        <h1> Create New Task </h1>
        <input type="text" value={title} placeholder='Title' name="title" onChange={e => setTitle(e.target.value)} />
        <input type="text" value={description} placeholder='Description' name="description" onChange={e => setDescription(e.target.value)} />
        <input type="date" value={dueDate} placeholder='Due on' name="dueDate" onChange={e => setDueDate(e.target.value)}/>
        <Button label="Cancel" onClick={toggleModal}/>
        <Button label="Create" onClick={(title, description, dueDate) => createTask(title, description, dueDate)}/>
      </div>
    );
  }

export default TaskForm;
