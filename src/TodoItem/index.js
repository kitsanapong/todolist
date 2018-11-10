import React, { Component } from 'react';

import TodoItemStyledComponent from './TodoItemStyledComponent'
import CheckBox from '../CheckBox'
import TextInput from '../TextInput'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
    }
  }

  render() {
    return (
      <TodoItemStyledComponent>
        <div className="left">
            <div className="checkbox-wrapper">
              <CheckBox />
            </div>
            <div className="input-wrapper">
              <TextInput done={true}/>
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
