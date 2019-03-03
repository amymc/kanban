import React, { useContext } from "react";
import uuid from "uuid/v4";
import { stages } from "./utils";

const AppContext = React.createContext();
export const useApp = () => useContext(AppContext);

export class AppProvider extends React.Component {
  state = {
    stage: null,
    currentTaskId: null,
    tasks: {},
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  saveTask = ({ title, description, dueDate }, id) => {
    const { stage, tasks } = this.state;
    const currentStage = tasks[id] ? tasks[id].stage : stage;
    const newTask = {
      [id || uuid()]: {
        title,
        description,
        dueDate: new Date(dueDate),
        stage: currentStage,
      },
    };
    this.setState({ tasks: { ...this.state.tasks, ...newTask } });
  };

  deleteTask = id => {
    const { [id]: value, ...newTasks } = this.state.tasks;
    this.setState({ tasks: newTasks });
  };

  updateTaskStage = (taskId, newStage) => {
    const newDueDate =
      stages[newStage] === stages.completed
        ? new Date()
        : this.state.tasks[taskId].dueDate;

    this.setState({
      tasks: {
        ...this.state.tasks,
        [taskId]: {
          ...this.state.tasks[taskId],
          stage: newStage,
          dueDate: newDueDate,
        },
      },
    });
  };

  render() {
    const { props, state } = this;
    return (
      <AppContext.Provider
        value={{
          onChange: this.onChange,
          saveTask: this.saveTask,
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
