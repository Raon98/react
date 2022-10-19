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
    hdToggleEdit = () => {
        const { editing} = this.state
        this.setState({
            editing: !editing
        })
    }

    hdUpdate = () => {
        const {info, onUpdate} = this.props
        onUpdate(info.num)
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

        const {hdRemove} = this
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={hdRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;