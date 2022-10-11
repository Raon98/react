import React, { Component } from 'react';
import TodoList from "./component/TodoList";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {
  render() {
    return (
        <div>
          <TodoList from={<Form/>}>
              <TodoItemList/>
          </TodoList>
        </div>
    );
  }
}

export default App;