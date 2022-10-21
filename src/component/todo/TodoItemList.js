import React, {Component} from 'react'
import TodoItem from "./TodoItem";

/**
 * @ 3. 컴포넌트 ITEM 만들기
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

        /**
         @ 6. 원래는 const todoList = todos.map(todo => ...) 의 형태여야 하지만,
            함수의 파라미터 부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어주었습니다.

         비구조화 할당 : 배열이나 객체의 속성 값을 해체하여 그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식
            ex) const arr[a1 , a2, a3 ] = [b1 , b2, b3 ]
             print(a1) = 'b1'
         */

        const todoList =todos.map(({id, text, checked})=>
        <TodoItem
            id ={id}
            text = {text}
            checked = {checked}
            onToggle = {onToggle}
            onRemove = {onRemove}
            key = {id}
        >

        </TodoItem>
    )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList