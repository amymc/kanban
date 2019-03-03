import React from "react";
import { css } from "emotion";
import { AppProvider, AppConsumer } from "./App.context.js";
import { ModalProvider, ModalConsumer } from "./Modal/Modal.context";
import Column from "./Column";
import Modal from "./Modal/Modal";
import TaskForm from "./Forms/TaskForm";
import { getTasksByStage, stages } from "./utils";
import { colors, defaultFont } from "./styleGlobals";

const app = css`
  position: relative;
  height: 100%;
  padding: 40px;
  background-color: ${colors.lightGrey};
  ${defaultFont};
`;

const appInner = css`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <AppProvider>
      <AppConsumer>
        {({ currentTaskId, tasks }) => (
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
                        tasks={getTasksByStage(tasks, key)}
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
        )}
      </AppConsumer>
    </AppProvider>
  );
};

export default App;
