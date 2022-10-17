import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component{
    static defarultProps = {
        data: []
    }
    render() {
        const {data} = this.props
        const list = data.map(info => (<PhoneInfo key={info.id} info={info}/>))


        return(
            <div>
                {list}
            </div>
        )
    }
}export default PhoneInfoList