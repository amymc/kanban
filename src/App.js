import React, { Component } from 'react';
import { css } from 'emotion';
import { AppProvider, AppConsumer } from './App.context.js'
import { ModalProvider, ModalConsumer } from './Modal.context';
import Column from './Column';
import Modal from './Modal';
import TaskForm from './TaskForm';

const app = css({
  display: 'flex',
  position: 'relative',
  height: '100%',
  backgroundColor: '#f4f3f8',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 14,
});


class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppConsumer>
          {({ tasks }) => (
            <ModalProvider>
              <ModalConsumer>
                {({ shouldShowModal }) => (
                  <div className={app}>
                    <Column heading='Backlog' canCreateTask/>
                    <Column heading='In Progress' canCreateTask/>
                    <Column heading='Completed'/>
                    {shouldShowModal &&
                      <Modal>
                        <TaskForm/>
                      </Modal>
                    }
                  </div>
                )
              }
            </ModalConsumer>
          </ModalProvider>
        )}
      </AppConsumer>
    </AppProvider>
    )
  }
}

export default App;
