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

  renderCheckBox() {
    const { done } = this.state
    return (
      <CheckBox
        checked={done === true}
        onClick={(e) => { this.handleCheckBoxChange(e) }}
      />
    )
  }

  handleCheckBoxChange(e) {
    this.setState({
      done: !this.state.done,
    })
  }

  render() {
    return (
      <TodoItemStyledComponent>
        <div className="left">
            <div className="checkbox-wrapper">
              { this.renderCheckBox() }
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
