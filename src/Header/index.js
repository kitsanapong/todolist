import React, { Component } from 'react';

import HeaderStyledComponents from './HeaderStyledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderStyledComponents>
        <div className="info-wrapper">
            <div className="text">TODOs</div>
            <div className="progress">3 tasks</div>
        </div>
        <div className="button-wrapper">
            <div>+</div>
        </div>
      </HeaderStyledComponents>
    );
  }
}

export default Header;
