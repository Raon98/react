import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component{
    static defarultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }
    render() {
        /**
         * 배열을 랜더링할시에는 꼭 KEY값을 사용해야함
         */
        const {data , onRemove,onUpdate} = this.props
        const list = data.map((info) => (<PhoneInfo key={info.num} info={info} onRemove={onRemove} onUpdate={onUpdate}/>))

        return(
            <div>
                {list}
            </div>
        )
    }
}export default PhoneInfoList