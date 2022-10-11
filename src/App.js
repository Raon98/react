import React, { Component } from 'react';
import TodoList from "./component/TodoList";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {

    id = 3

    state = {
        input : '',
        todos : [
            {id : 0, text: '리엑트 소개',checked: false},
            {id : 1, text: '리엑트 소개',checked: true},
            {id : 2, text: '리엑트 소개',checked: false}
        ]
    }

    /**
     5. Form 기능 구현하기
     1. 텍스트 내용 바뀌면 state UPDATE
     2. 버튼이 클릭되면 새로운 todo 생성 후 todos UPDATE
     3. Input에서 Enter 누르면 버튼을 누른것과 동일하게 작업진행

     REACT 배열 유의사항
     PUSH 사용 금지
     - 데이터가 추가되긴 하지만 나중에 최적화할 때, 배열을 비교하여 리렌더링을 방지하게 되는데, PUSH시 최적화 불가
     */
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input의 다음 바뀔 값
        })
    }
    handleCreate = () => {
        const {input, todos} = this.state;

        this.setState({
            input: '', //인풋 초기화
            todos: todos.concat({
                id: this.id++,
                text : input,
                checked : false
            })
        })
    }
    handleKeyPress =(e) => {
        //Enter Key 눌렀을시
        if(e.key === 'Enter'){
        this.handleCreate()
        }
    }

  render() {
    const {input, todos} =this.state;
    const {handleChange,
           handleCreate,
           handleKeyPress
    } = this;

    return (
        <div>
            <TodoList from={(<Form
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
                >
            </Form>
            )}>
              <TodoItemList todos={todos}/>
          </TodoList>
        </div>
    );
  }
}

export default App;