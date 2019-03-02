import React, { Component } from "react";
import { css } from "emotion";
import { AppProvider, AppConsumer } from "./App.context.js";
import { ModalProvider, ModalConsumer } from "./Modal.context";
import Column from "./Column";
import Modal from "./Modal";
import TaskForm from "./TaskForm";

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
    return Object.keys(tasks).reduce(function(r, id) {
      if (tasks[id].stage === stage) r[id] = tasks[id];
      return r;
    }, {});
  };

  render() {
    return (
      <AppProvider>
        <AppConsumer>
          {({ currentTask, tasks }) => {
            debugger;
            return (
              <ModalProvider>
                <ModalConsumer>
                  {({ shouldShowModal }) => (
                    <div className={app}>
                      <div className={appInner}>
                        <Column
                          heading='Backlog'
                          canCreateTask
                          stage='backlog'
                          tasks={this.getTasksByStage(tasks, "backlog")}
                        />
                        <Column
                          heading='In Progress'
                          canCreateTask
                          stage='inProgress'
                          tasks={this.getTasksByStage(tasks, "inProgress")}
                        />
                        <Column
                          heading='Completed'
                          stage='completed'
                          tasks={this.getTasksByStage(tasks, "completed")}
                        />
                        {shouldShowModal && (
                          <Modal>
                            <TaskForm {...currentTask} />
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
