import React, { Component } from 'react'

import CheckBoxStyledComponents from './CheckBoxStyledComponents'

class CheckBox extends Component {
  render () {
    return (
      <CheckBoxStyledComponents>
        <label>
          <input
            type="checkbox"
            checked={this.props.checked}
            onClick={this.props.onClick.bind(this)}
          />
          <span className="checker"></span>
        </label>
      </CheckBoxStyledComponents>
    )
  }
}

CheckBox.defaultProps = {
  onClick: () => {},
  checked: false,
}

export default CheckBox