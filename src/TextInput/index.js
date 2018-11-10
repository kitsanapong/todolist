import React, { Component } from 'react'

import TextInputStyledComponents from './TextInputStyledComponents'

class TextInput extends Component {
  render() {
    return (
      <TextInputStyledComponents>
        <input type="text" value="Play badminton" />
        <span className="underline"></span>
      </TextInputStyledComponents>
    )
  }
}

export default TextInput