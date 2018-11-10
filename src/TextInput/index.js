import React, { Component } from 'react'

import TextInputStyledComponents from './TextInputStyledComponents'

class TextInput extends Component {
  componentDidMount() {
    if (this.input && this.props.focus === true) {
      this.input.focus()
    }
  }

  getClassName() {
    let className = ''
    className += this.props.done === true ? ' done' : ''
    return className
  }

  render() {
    return (
      <TextInputStyledComponents className={this.getClassName()}>
        <input
          ref={(node) => { this.input = node }}
          type="text"
          value={this.props.value}
          onChange={this.props.onChange.bind(this)}
        />
        <span className="underline"></span>
      </TextInputStyledComponents>
    )
  }
}

TextInput.defaultProps = {
  value: '',
  onChange: () => {},
  focus: false,
}

export default TextInput