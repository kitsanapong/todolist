import React, { Component } from 'react';

import ButtonStyledComponents from './ButtonStyledComponents'

class Button extends Component {
  render() {
    return (
      <ButtonStyledComponents onClick={this.props.onClick.bind(this)}>
        <div className="wrapper">
            <div className="content">+</div>
        </div>
      </ButtonStyledComponents>
    );
  }
}

Button.defaultProps = {
  onClick: () => { console.log('Click') },
}

export default Button;
