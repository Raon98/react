import React, {Component} from "react";
import './TodoItem.css'
import classnames from "classnames";

/**
 * @ 4. TodoItem 만들기
 - 체크 값이 활성화되어있으면 우측에 체크박스
 - 마우스가 위에 있을때는 엑스마크
 - 컴포넌트 영역이 클릭되면 체크박스가 활성화되며 중간글이 그어지고, 좌측의 엑스가 클릭되며 삭제

 text : todo내용
 checked : 체크박스 상태
 id : todo의 고유 아이디값
 onToggle : checkbox를 키고 끄는 함수
 onRemove : 아이템을 삭제시키는 함수

 e.stopPropagation()
 -> 이 작업을 하지않을 시, x를 눌렀을때 onRemove 함수만 실행되는 것이 아니라, 해당 DOM의 부모의 클릭이벤트에 연결되어있는
 onToggle 이 실행되는데 , onRemove -> onToggle이 실행되면서 삭제가 재대로 진행되지않을 수 있어서 처리
 = 이벤트의 확산을 멈춰주는 기능

 onClick={onToggle{id}} => 함수가 랜더링 될때마다 실행되기때문에 무한으로 발생
 -> onClick={() => onToggle(id)} 와 같은 형식으로 작성
 */

class TodoItem extends Component {
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props

        return (
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation(); // onToggle이 실행되지 않도록 함
                    onRemove(id)
                }}>&times;</div>
                <div className={classnames('todo-text', {checked})}>
                    {text}
                </div>
                {
                    checked && (<div className='check-mark'></div>)
                }
            </div>
        );
    }
}

export default TodoItem;