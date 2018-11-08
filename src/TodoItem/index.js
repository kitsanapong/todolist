import React, { Component } from 'react';

import TodoItemStyledComponent from './TodoItemStyledComponent'

class TodoItem extends Component {
  render() {
    return (
      <TodoItemStyledComponent>
        Item
      </TodoItemStyledComponent>
    );
  }
}

export default TodoItem;
