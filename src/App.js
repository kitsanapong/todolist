import React, { Component } from 'react';

import Header from './Header'
import TodoItem from './TodoItem'

import AppStyledComponents from './AppStyledComponents'

class App extends Component {
  render() {
    return (
      <AppStyledComponents>
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </AppStyledComponents>
    );
  }
}

export default App;
