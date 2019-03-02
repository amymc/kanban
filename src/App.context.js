import React, { useContext } from "react";
import uuid from "uuid/v4";
import { stages } from "./utils";

const AppContext = React.createContext();
export const useApp = () => useContext(AppContext);

export class AppProvider extends React.Component {
  state = {
    stage: null,
    currentTaskId: null,
    tasks: JSON.parse(localStorage.getItem("tasks")) || {},
  };

  onChange = (key, value) => {
    debugger;
    this.setState({ [key]: value });
  };

  createTask = ({ title, description, dueDate }) => {
    const newTask = {
      [uuid()]: {
        title,
        description,
        dueDate: Date.parse(new Date(dueDate)),
        stage: this.state.stage,
      },
    };
    this.setState({ tasks: { ...this.state.tasks, ...newTask } }, () =>
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  deleteTask = (e, id) => {
    const { [id]: value, ...newTasks } = this.state.tasks;
    debugger;
    this.setState({ tasks: newTasks }, () =>
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  updateTaskStage = (taskId, newStage) => {
    debugger;
    const newDueDate =
      stages[newStage] === stages.completed
        ? Date.parse(new Date())
        : this.state.tasks[taskId].dueDate;
    this.setState(
      {
        tasks: {
          ...this.state.tasks,
          [taskId]: {
            ...this.state.tasks[taskId],
            stage: newStage,
            dueDate: newDueDate,
          },
        },
      },
      () => localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  render() {
    const { props, state } = this;
    return (
      <AppContext.Provider
        value={{
          onChange: this.onChange,
          createTask: this.createTask,
          deleteTask: this.deleteTask,
          currentTaskId: state.currentTaskId,
          updateTaskStage: this.updateTaskStage,
          tasks: state.tasks,
        }}
      >
        {props.children}
      </AppContext.Provider>
    );
  }
}
export const AppConsumer = AppContext.Consumer;
