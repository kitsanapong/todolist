import React, { Component } from 'react';

import Button from '../Button'

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
          <Button />
        </div>
      </HeaderStyledComponents>
    );
  }
}

export default Header;
