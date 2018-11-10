import React, { Component } from 'react';

import Header from './Header'
import TodoItem from './TodoItem'

import AppStyledComponents from './AppStyledComponents'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  renderTodoList() {
    const { todos } = this.state
    const todosItemList = todos.map((todo) => {
      return (
        <TodoItem />
      )
    })

    return (
      <div className="todo-list-wrapper">
        { todosItemList }
      </div>
    )
  }

  render() {
    return (
      <AppStyledComponents>
        <Header />
        { this.renderTodoList() }
      </AppStyledComponents>
    );
  }
}

export default App;
