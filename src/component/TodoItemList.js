import React, {Component} from 'react'
import TodoItem from "./TodoItem";

/** 3. 컴포넌트 ITEM 만들기
 - 이후 만들 TodoItem 여러개를 랜더링하기 위한 공간
 보여주는 리스트가 동적일 경우 함수형이 아닌 클래스형 컴포넌트 작성
   - 컴포넌트 성능 최적확 가능

 todos : todo 객체들이 들어있는 배열
 onToggle : 체크박스를 키고 끄는 함수
 onRemove : 아이템을 삭제시키는 함수

 */
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} =this.props;
        
        return (
            <div>
                <TodoItem text="안녕"/>
                <TodoItem text="REACT"/>
                <TodoItem text="재밌다"/>
            </div>
        );
    }
}
export default TodoItemList