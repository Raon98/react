import React from 'react';
import './Form.css';

/**2. 컴포넌트 FROM 만들기
 컴포넌트 생김새 정리
 1. 컴포넌트 DOM 태그 작성
 2. CSS 스타일 작성
 -> 상태 관리 및 Props로 필요한  값 전달

 컴토넌트의 4가지 props
    value : 인풋의 내용
    onCreate : 버튼이 클릭 될때 실행되는 함수
    onChange : 인풋 내용이 변경될 때 실행되는 함수
    onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수.
                 - 이 함수는 나중에 Enter가 눌렀을때 onCreate를 한것과 동일한 작업을 하기위해 사용
 **/

const Form = ({value,onChange,onCreate,onKeyPress}) => {
    return(
        <div className='form'>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className='create-button' onClick={onCreate}> 추가</div>
        </div>
    )
}
export default Form;