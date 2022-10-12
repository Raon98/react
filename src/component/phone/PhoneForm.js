import React, {Component} from "react";

class PhoneForm extends Component {
    state = {
        name: ''
    }
    handleChange = (name) => {
        this.setState({
            name: name.target.value
        })
    }

    render() {
        const {name} = this.state

        const {handleChange} = this
        return (
            <form>
                <input
                    placeholder="이름"
                    value={name}
                    onChange={handleChange}
                >
                </input>
                <div>이름 : {name}</div>
            </form>
        )
    }
}

export default PhoneForm