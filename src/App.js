import React, { Component } from "react";
import { css } from "emotion";
import { AppProvider, AppConsumer } from "./App.context.js";
import { ModalProvider, ModalConsumer } from "./Modal.context";
import Column from "./Column";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import { stages } from "./utils";

const app = css({
  height: "100%",
  padding: 40,
  backgroundColor: "#f4f3f8",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 14,
});

const appInner = css({
  display: "flex",
  position: "relative",
  justifyContent: "center",
});

class App extends Component {
  getTasksByStage = (tasks, stage) => {
    return Object.keys(tasks).reduce(function(filteredTasks, currentId) {
      if (tasks[currentId].stage === stage)
        filteredTasks[currentId] = tasks[currentId];
      return filteredTasks;
    }, {});
  };

  render() {
    return (
      <AppProvider>
        <AppConsumer>
          {({ currentTaskId, tasks }) => {
            debugger;
            return (
              <ModalProvider>
                <ModalConsumer>
                  {({ shouldShowModal }) => (
                    <div className={app}>
                      <div className={appInner}>
                        {Object.entries(stages).map(([key, value]) => (
                          <Column
                            key={key}
                            heading={value}
                            canCreateTask={value !== stages.completed}
                            stage={key}
                            tasks={this.getTasksByStage(tasks, key)}
                          />
                        ))}
                        {shouldShowModal && (
                          <Modal>
                            <TaskForm
                              id={currentTaskId}
                              {...tasks[currentTaskId]}
                            />
                          </Modal>
                        )}
                      </div>
                    </div>
                  )}
                </ModalConsumer>
              </ModalProvider>
            );
          }}
        </AppConsumer>
      </AppProvider>
    );
  }
}

export default App;
