import React from 'react';
import './TodoList.css';

/**
 * @ 1. 컴포넌트 구성
 함수형 컴포넌트
 파라미터로 받는 {props} => 비구조화할당 (props) => {...}
 ({from, children})=> {...} 로 작성
 JSX를 props 형태로 전달할수 있다.!!
 <TodoList from={<div>form 위치</div>
                <div>children 위치</div>
                }
 **/

const TodoList = ({from, children}) => {
    return (
        <main className="todo-list">
            <div className="title">
                오늘 할일
            </div>
            <section className="from-wrapper">
                {from}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};


export default TodoList;