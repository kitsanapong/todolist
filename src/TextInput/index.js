import React, { Component } from 'react'

import TextInputStyledComponents from './TextInputStyledComponents'

class TextInput extends Component {
  getClassName() {
    let className = ''
    className += this.props.done === true ? ' done' : ''
    return className
  }

  render() {
    return (
      <TextInputStyledComponents className={this.getClassName()}>
        <input type="text" value="Play badminton" />
        <span className="underline"></span>
      </TextInputStyledComponents>
    )
  }
}

export default TextInput