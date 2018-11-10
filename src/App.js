import React, { Component } from 'react';

import Header from './Header'
import TodoItem from './TodoItem'

import AppStyledComponents from './AppStyledComponents'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 0,
          done: false,
          description: '',
        }
      ],
    }
  }

  renderTodoList() {
    const { todos } = this.state
    const todosItemList = todos.map((todo, index) => {
      return (
        <TodoItem
          key={todo.id}
          value={todo.description}
          onTextInputChange={(e) => { this.handleTodoTextChange(e, index) }}
          onCheckBoxChange={(e) => { this.handleCheckBoxChange(e, index) }}
          focus={(index === todos.length - 1) && (todo.description === '')}
          done={todo.done}
        />
      )
    })

    return (
      <div className="todo-list-wrapper">
        { todosItemList }
      </div>
    )
  }

  handleTodoTextChange(e, index) {
    const { todos } = this.state
    const editingTodo = {
      ...todos[index],
      description: e.target.value,
    }
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        editingTodo,
        ...this.state.todos.slice(index + 1)
      ],
    })
  }

  handleCheckBoxChange(e, index) {
    const { todos } = this.state
    const editingTodo = {...todos[index]}
    editingTodo.done = !editingTodo.done
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        editingTodo,
        ...this.state.todos.slice(index + 1)
      ],
    })
  }

  handleAddNewTodo() {
    const { todos } = this.state
    const lastTodo = todos[todos.length - 1]
    if (todos.length === 0 || lastTodo.description !== '') {
      const newTodo = {
        id: this.state.todos.length,
        done: false,
        description: '',
      }
      this.setState({
        todos: [...this.state.todos, newTodo],
      })
    }
  }

  render() {
    return (
      <AppStyledComponents>
        <Header
          todos={this.state.todos}
          handleAddNewTodo={this.handleAddNewTodo.bind(this)}
        />
        { this.renderTodoList() }
      </AppStyledComponents>
    );
  }
}

export default App;
