import React, { Component } from 'react'

import CheckBoxStyledComponents from './CheckBoxStyledComponents'

class CheckBox extends Component {
  render () {
    return (
      <CheckBoxStyledComponents>
        <label>
          <input type="checkbox" />
          <span></span>
        </label>
      </CheckBoxStyledComponents>
    )
  }
}

export default CheckBox