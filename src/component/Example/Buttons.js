import React from 'react';
import './Buttons.css';

const pairs = ['BTCUSD', 'ETHUSD', 'XRPUSD'];

const Buttons = ({ onChangePair }) => {
    const buttonList = pairs.map(
        pair => (<button key={pair} onClick={() => onChangePair(pair)}>{pair}</button>)
    );
    //pair롤 받아온 값을 가지고 3개의 버튼을 보여주고 클릭됨에 따라 onChangePair 호출
    return (
        <div className="Buttons">
            {
                buttonList
            }
        </div>
    );
};

export default Buttons;