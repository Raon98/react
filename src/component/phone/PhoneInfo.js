import React, {Component} from 'react';

class PhoneInfo extends Component {

    /**
     * @defaultProps 비구조할당시 실수로 할당안됐을떄 기본값 설정
     */
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            num: 0
        }
    }
    /**
     * @12 데이터 업데이트
     * 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정
     *  이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을 input 형태로 보여주게 됩니다.
     */
    state = {
        editing: false,
        name: '',
        phone: ''
    }
    // editing 값을 반전시키는 함수
    // true -> false, false -> true
    hdToggleEdit = () => {
        const {editing} = this.state
        this.setState({ editing: !editing })
    }

    /** @ 12 데이터 업데이트
     * 수정을 눌렀을땐, 기존의 값이 input에 나타나고,수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
     */

    componentDidUpdate(prevProps, prevState) {
        const {info, onUpdate} = this.props

        // editing 값이 false -> true 로 전환 될 때
        // info 의 값을 state 에 넣어준다
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            onUpdate(info.num, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    // input 에서 onChange 이벤트가 발생 될 때 호출되는 함수
    hdChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    /**
     * @11 데이터 삭제
     */
    hdRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.num)
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {hdRemove, hdToggleEdit, hdChange} = this
        const {editing} = this.state
        //수정모드
        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={hdChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={hdChange}
                        />
                    </div>
                    <button onClick={hdToggleEdit}>적용</button>
                    <button onClick={hdRemove}>삭제</button>
                </div>
            )
        }

        //일반모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={hdToggleEdit}>수정</button>
                <button onClick={hdRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;