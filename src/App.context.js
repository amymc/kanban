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
    debugger;
    this.setState({ [key]: value });
  };

  createTask = ({ title, description, dueDate }) => {
    const newTask = {
      [uuid()]: {
        title,
        description,
        dueDate,
        stage: this.state.stage,
      },
    };
    this.setState({ tasks: { ...this.state.tasks, ...newTask } });
  };

  updateTaskStage = (taskId, newStage) => {
    // if (newStage === stages.completed){

    // }
    const newDueDate =
      newStage === stages.completed
        ? "today"
        : this.state.tasks[taskId].dueDate;
    this.setState({
      tasks: {
        ...this.state.tasks,
        [taskId]: { ...this.state.tasks[taskId], stage: newStage },
      },
    });
  };

  render() {
    const { props, state } = this;
    return (
      <AppContext.Provider
        value={{
          onChange: this.onChange,
          createTask: this.createTask,
          currentTask: state.tasks[state.currentTaskId],
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
