import React from 'react'

function TimerDisplay(props) {
    
    // const h = () => {
    //     if(props.time.h === 0) {
    //         return '';
    //     } else {
    //         return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
    //     }
    // }
    if(!props.time){
        return '';
    }
    return (
        <div className="clockDiv">
            {/* {h()}&nbsp;&nbsp; */}
            <p style={{color: props.changeColor? "red": "white"}}>{props.time.m}&nbsp;:&nbsp;{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</p>
        </div>
    )
}

export default TimerDisplay