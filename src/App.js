import React, { Component } from 'react';

import Header from './Header'
import TodoItem from './TodoItem'

import AppStyledComponents from './AppStyledComponents'

const ALL_MODE = 'ALL_MODE'
const DONE_MODE = 'DONE_MODE'
const REMAIN_MODE = 'REMAIN_MODE'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: ALL_MODE,
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
    const todosItemList = todos.filter(this.filterTodoByMode.bind(this))
    .map((todo, index) => {
      return (
        <TodoItem
          key={todo.id}
          value={todo.description}
          onTextInputChange={(e) => { this.handleTodoTextChange(e, index) }}
          onCheckBoxChange={(e) => { this.handleCheckBoxChange(e, index) }}
          focus={(index === todos.length - 1) && (todo.description === '')}
          done={todo.done}
          onDeleteTodo={() => { this.handleDeleteTodo(index) }}
        />
      )
    })

    return (
      <div className="todo-list-wrapper">
        { todosItemList }
      </div>
    )
  }

  filterTodoByMode(todo) {
    if (this.state.mode === ALL_MODE) {
      return true
    } else if(this.state.mode === DONE_MODE) {
      return todo.done === true
    } else if(this.state.mode === REMAIN_MODE) {
      return todo.done === false
    } else {
      return false
    }
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
      }, () => {
        this.changeMode(ALL_MODE)
      })
    }
  }

  handleDeleteTodo(index) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ],
    })
  }

  renderModeSelection() {
    const allModeClassName = this.state.mode === ALL_MODE? ' active' : ''
    const doneModeClassName = this.state.mode === DONE_MODE? ' active' : ''
    const remainModeClassName = this.state.mode === REMAIN_MODE? ' active' : ''
    return (
      <div className="mode-selection-wrapper">
        <div className={`mode-item all-mode ${allModeClassName}`} onClick={() => { this.changeMode(ALL_MODE) }}>All</div>
        <div className={`mode-item done-mode ${doneModeClassName}`} onClick={() => { this.changeMode(DONE_MODE) }}>Done</div>
        <div className={`mode-item remain-mode ${remainModeClassName}`} onClick={() => { this.changeMode(REMAIN_MODE) }}>Remain</div>
      </div>
    )
  }

  changeMode(mode) {
    this.setState({
      mode: mode,
    })
  }

  render() {
    return (
      <AppStyledComponents>
        <Header
          todos={this.state.todos}
          handleAddNewTodo={this.handleAddNewTodo.bind(this)}
        />
        { this.renderModeSelection() }
        { this.renderTodoList() }
      </AppStyledComponents>
    );
  }
}

export default App;
