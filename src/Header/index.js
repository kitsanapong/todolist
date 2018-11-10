import React, { Component } from 'react';

import Button from '../Button'

import HeaderStyledComponents from './HeaderStyledComponents'

class Header extends Component {
  renderRemaining() {
    const { todos } = this.props
    const remainingTodos = todos.filter((todo) => { return todo.done === false })
    if (remainingTodos.length > 0) {
      return `${100 - Math.ceil(remainingTodos.length/todos.length*100)}% done`
    } else {
      return ''
    }
  }

  render() {
    this.renderRemaining()
    return (
      <HeaderStyledComponents>
        <div className="info-wrapper">
            <div className="text">TODOs</div>
            <div className="progress">{ this.renderRemaining() }</div>
        </div>
        <div className="button-wrapper">
          <Button onClick={this.props.handleAddNewTodo.bind(this)}/>
        </div>
      </HeaderStyledComponents>
    );
  }
}

export default Header;
