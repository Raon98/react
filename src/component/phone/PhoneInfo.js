import React, {Component} from 'react';

class PhoneInfo extends Component {

    /**
     * @defaultProps 비구조할당시 실수로 할당안됐을떄 기본값 설정
     */
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-1234-1234',
            id: 0
        }
    }

    render() {
        const style = {
            border: 'ipx soild black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}
export default PhoneInfo