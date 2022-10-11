import React, { Component } from 'react';
import TodoList from "./component/TodoList";

class App extends Component {
  render() {
    return (
        <div>
          <TodoList>
              템플릿 완성
          </TodoList>
        </div>
    );
  }
}

export default App;