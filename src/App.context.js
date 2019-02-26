import React, { useContext } from 'react'

const AppContext = React.createContext()
export const useApp = () => useContext(AppContext)

export class AppProvider extends React.Component {
  state = {
    tasks: [],
  }

  createTask = (title, description, dueDate) => {
    debugger
    this.setState({ tasks: 'test' })
  }

  render() {
    const { props, state } = this
    return (
      <AppContext.Provider
        value={{
          createTask: this.createTask,
          tasks: state.tasks
        }}
      >
        {props.children}
      </AppContext.Provider>
    )
  }
}
export const AppConsumer = AppContext.Consumer
