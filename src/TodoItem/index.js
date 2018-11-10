import React, { Component } from 'react';

import TodoItemStyledComponent from './TodoItemStyledComponent'
import CheckBox from '../CheckBox'
import TextInput from '../TextInput'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMouseOver: false,
    }
  }

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

  handleMouseOver() {
    this.setState({
      isMouseOver: true,
    })
  }

  handleMouseOut() {
    this.setState({
      isMouseOver: false,
    })
  }

  renderDeleteIcon() {
    let className = 'icon-wrapper'
    className += this.state.isMouseOver === true ? ' visible' : ''
    return (
      <div className={className} onClick={this.props.onDeleteTodo.bind(this)}>x</div>
    )
  }

  render() {
    return (
      <TodoItemStyledComponent
        onMouseOver={() => { this.handleMouseOver() }}
        onMouseOut={() => { this.handleMouseOut() }}
      >
        <div className="left">
          <div className="checkbox-wrapper">
            { this.renderCheckBox() }
          </div>
          <div className="input-wrapper">
            { this.renderTextInput() }
          </div>
        </div>
        <div className="right">
          { this.renderDeleteIcon() }
        </div>
      </TodoItemStyledComponent>
    );
  }
}

TodoItem.defaultProps = {
  onDeleteTodo: () => {},
}

export default TodoItem;
