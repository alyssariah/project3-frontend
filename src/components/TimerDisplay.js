import React from 'react'

function TimerDisplay(props) {
    
    const h = () => {
        if(props.time.h === 0) {
            return '';
        } else {
            return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
        }
    }
    return (
        <div className="clockDiv">
            {h()}&nbsp;&nbsp;
            <span className="clock" style={{color: props.changeColor? "red": "blue"}}>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
            <span className="clock" style={{color: props.changeColor? "red": "blue"}}>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;&nbsp;
        </div>
    )
}

export default TimerDisplay