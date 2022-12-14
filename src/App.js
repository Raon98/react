import React, {Component} from 'react';
import TodoList from "./component/todo/TodoList";
import Form from "./component/Form/Form";
import TodoItemList from "./component/todo/TodoItemList";
import Counter from "./component/Form/Counter";
import PhoneForm from "./component/phone/PhoneForm";
import PhoneInfoList from "./component/phone/PhoneInfoList";

class App extends Component {
    id = 2
    num = 0
    state = {
        todos: [],
        information: [],
        keyword : ''
    }

    /**
     @ 5. Form 기능 구현하기
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
                text: input,
                checked: false
            })
        })
    }
    handleKeyPress = (e) => {
        //Enter Key 눌렀을시
        if (e.key === 'Enter') {
            this.handleCreate()
        }
    }

    /**
     @ 7. 배열 업데이트
     REACT 배열 유의사항
     PUSH 사용 금지
     - 데이터가 추가되긴 하지만 나중에 최적화할 때, 배열을 비교하여 리렌더링을 방지하게 되는데, PUSH시 최적화 불가

     때문에 전개연산자를 이용해 업데이트 실행
     전개연산자 : ES6 [...arr]문   => 배열의 요소나 객체를 나열해주는 연산자
     */

    handleToggle = (id) => {
        const {todos} = this.state;

        //1. 파라미터로 받은 ID를 가지고 몇번째 아이템인지 찾음
        const index = todos.findIndex((todo) => todo.id === id)
        console.log("[======================================================================]")
        console.log("[ 1. index 값 확인 : " + index + "]")

        //2. 선택된 객체
        const selected = todos[index]
        console.log("[ 2. selected 값 확인 : " + JSON.stringify(selected) + "]")
        //3. 배열을 복사
        const nextTodos = [...todos]
        console.log("[ 3. nextTodos 값 확인 : " + JSON.stringify(nextTodos) + "]")
        //4. 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        console.log("[ 4. nextTodos[index] 값 확인 : " + JSON.stringify(nextTodos[index]) + "]")

        this.setState({
            todos: nextTodos
        });
        console.log("[ 5. nextTodos 값 확인 : " + JSON.stringify(nextTodos) + "]")
        console.log("[======================================================================]")
    }

    /**
     * @ 7-1handleToggle 또다른 방법
     *   handleToggle = (id) => {
     *     const { todos } = this.state;
     *     const index = todos.findIndex(todo => todo.id === id);
     *
     *     const selected = todos[index];
     *
     *     this.setState({
     *       todos: [
     *         ...todos.slice(0, index),
     *         {
     *           ...selected,
     *           checked: !selected.checked
     *         },
     *         ...todos.slice(index + 1, todos.length)
     *       ]
     *     });
     *   }
     *
     */

    /** @8. 배열 삭제
     파라미터로 받아온 ID 값을 갖고있지 않는 배열을 새로 생성
     => 우리가 지정한 ID값을 배제한 새로운배열 탄생
     */

    handleRemove = (id) => {
        const {todos} = this.state
        this.setState({
                todos: todos.filter(todo => todo.id !== id)
            }
        )
    }

    hdCreate = (data) => {
        /** @10. 데이터 추가 */
        const {information} = this.state;
        console.log(data)
        this.setState({
            information: information.concat({num: this.num++, ...data})
        })
    }
    /** @11. 데이터 삭제 */
    hdRemove = (num) => {
        const {information} = this.state
        this.setState({
            information: information.filter(info => info.num !== num)
        })
    }
    /** @12. 데이터 업데이트 */
    hdUpdate = (num, data) => {
        const {information} = this.state
        this.setState({
            information: information.map(info => info.num === num ? {...info, ...data} : info)
            //일치하면 새로운 객체 생성 : 기존 객체 사용
        })
    }
    /** @13. 데이터 필터링 궇현 */
    hdChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }



render()
{
    const {input, todos, information,keyword} = this.state;
    const filteredList = information.filter(info => info.name.indexOf(keyword) !== -1); //해당값이 없으면 표시 x
    const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove,
        hdCreate,
        hdRemove,
        hdUpdate,
        hdChange
    } = this;

    return (
        <div>
            <div>[TODOLIST]---------------------------------------------</div>
            <TodoList from={(<Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    onRemove={handleRemove}
                >
                </Form>
            )}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoList>
            <p></p>
            <div>[COUNTER]---------------------------------------------</div>
            <Counter/>
            <p></p>
            <div>[PHONE]---------------------------------------------</div>
            <PhoneForm onCreate={hdCreate}/>
            <p>
                <input
                    placeholder="검색 할 이름을 입력하세요.."
                    onChange={hdChange}
                    value={keyword}
                />
            </p>
            <PhoneInfoList data={filteredList} onRemove={hdRemove} onUpdate={hdUpdate}/>
            <p></p>
        </div>
    );
}
}

export default App;