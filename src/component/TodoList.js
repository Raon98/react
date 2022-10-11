import React from 'react';
import './TodoList.css';

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