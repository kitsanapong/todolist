import React, { Component } from 'react';

import TodoItemStyledComponent from './TodoItemStyledComponent'
import CheckBox from '../CheckBox'

class TodoItem extends Component {
  render() {
    return (
      <TodoItemStyledComponent>
        <div className="left">
            <div className="checkbox-wrapper">
              <CheckBox />
            </div>
            <div className="input-wrapper">
                <input  type="text" value="Play Badminton" />
            </div>
        </div>
        <div className="right">
            <div className="icon-wrapper">/</div>
        </div>
      </TodoItemStyledComponent>
    );
  }
}

export default TodoItem;
