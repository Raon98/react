import React, { Component } from 'react';
import TodoList from "./component/TodoList";
import Form from "./component/Form";

class App extends Component {
  render() {
    return (
        <div>
          <TodoList from={<Form/>}>
              템플릿 완성
          </TodoList>
        </div>
    );
  }
}

export default App;