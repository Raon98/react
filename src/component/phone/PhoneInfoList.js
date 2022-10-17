import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component{
    static defarultProps = {
        data: []
    }
    render() {
        /**
         * 배열을 랜더링할시에는 꼭 KEY값을 사용해야함
         */
        const {data} = this.props
        const list = data.map((info,index) => (<PhoneInfo key={index} info={info}/>))

        return(
            <div>
                {list}
            </div>
        )
    }
}export default PhoneInfoList