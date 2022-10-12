import React, {Component} from "react";

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    /**@ 9. INPUT BOX
     [e.target.name]: e.target.value
     = INPUT 에 name값을 부여하여  value = name값이 일치할시 입력값 표시

     Computed property names 문법
     표현식(expression)을 이용해 객체의 key 값을 정의하는 문법
     ex ) var prop = 'bbyong';
     var obj = {
            [prop]: 123
        };
     obj; // Object { bbyong: 123 }
     */

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {name, phone} = this.state

        const {handleChange} = this
        return (
            <form>
                <input
                    placeholder="이름"
                    value={name}
                    onChange={handleChange}
                    name="name"
                >
                </input>
                <input
                    placeholder="전화번호"
                    value={phone}
                    onChange={handleChange}
                    name="phone"
                >
                </input>
                <div>이름 : {name}</div>
                <p></p>
                <div>전화번호 : {phone}</div>
            </form>
        )
    }
}

export default PhoneForm