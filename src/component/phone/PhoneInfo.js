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
    hdRemove = () => {
        const {info , onRemove} = this.props
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