import React, { useContext } from 'react';

const ModalContext = React.createContext();
export const useModal = () => useContext(ModalContext);

export class ModalProvider extends React.Component {
  state = {
    stage: null,
    shouldShowModal: false,
  }

  toggleModal = (stage) => {
    this.setState({ shouldShowModal: !this.state.shouldShowModal, stage })
  }

  render() {
    const { props, state } = this
    return (
      <ModalContext.Provider
        value={{
          toggleModal: this.toggleModal,
          shouldShowModal: state.shouldShowModal,
          stage: state.stage,
        }}
      >
        {props.children}
      </ModalContext.Provider>
    )
  }
}

export const ModalConsumer = ModalContext.Consumer;
