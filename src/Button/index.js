import React, { Component } from 'react';

import ButtonStyledComponents from './ButtonStyledComponents'

class Button extends Component {
  render() {
    return (
      <ButtonStyledComponents>
        <div className="wrapper">
            <div className="content">+</div>
        </div>
      </ButtonStyledComponents>
    );
  }
}

export default Button;
