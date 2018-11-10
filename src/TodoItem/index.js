import React, { Component } from 'react';

import TodoItemStyledComponent from './TodoItemStyledComponent'
import CheckBox from '../CheckBox'
import TextInput from '../TextInput'

class TodoItem extends Component {
  renderCheckBox() {
    return (
      <CheckBox
        checked={this.props.done}
        onClick={(e) => { this.props.onCheckBoxChange(e) }}
      />
    )
  }

  renderTextInput() {
    return (
      <TextInput
        done={this.props.done}
        value={this.props.value}
        onChange={this.props.onTextInputChange.bind(this)}
        focus={this.props.focus}
      />
    )
  }

  render() {
    return (
      <TodoItemStyledComponent>
        <div className="left">
            <div className="checkbox-wrapper">
              { this.renderCheckBox() }
            </div>
            <div className="input-wrapper">
              { this.renderTextInput() }
            </div>
        </div>
        <div className="right">
            {/* <div className="icon-wrapper">/</div> */}
        </div>
      </TodoItemStyledComponent>
    );
  }
}

export default TodoItem;
