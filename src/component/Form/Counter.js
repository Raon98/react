import React, {Component} from "react";

class Counter extends Component {
    state = {
        number : 0
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number : number+1
        })
    }

    handleDecrease = () => {
        this.setState(({number})=>({
            number : number -1
        }));
    }

  
    render() {

        const {handleIncrease,handleDecrease} = this
        return (
            <div>
                <h3>카운터</h3>
                <div>값 : {this.state.number}</div>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        )
    }
}
export default Counter