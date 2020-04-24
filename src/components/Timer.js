import React, {useState, useEffect} from 'react'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'

function Timer(props) {
    const [time, setTime] = useState({ms:0, s:59, m:0, h:0})
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // 0 = not started
    // 1 = started
    // 2 = pause

    useEffect(()=>{
        start()
    },[])

    const start = () => {
        run();
        setStatus(1)
        setInterv(setInterval(run, 10));
    };

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
    };

    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    };

    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ms:0, s:59, m:0, h:0})
    };
    const resume = () => start();

    let changeColor = false

    for(let i=0; i< props.length; i++){
        if(props.currentIndex == i){
            if(props.timeArr[i+1]> time.m){
                changeColor = false
            }
            else if((props.timeArr[i+1]) <= time.m-1){
                changeColor=true
            } 
        }
    }


    let timeleft = {s:59 -time.s, m:(props.timeArr[props.currentIndex+1])- time.m}
    
    if(timeleft.m < 0){
        timeleft={s:1+time.s, m:props.timeArr[props.currentIndex+1]-(time.m-1)}
    }
    let totalTime = props.timeArr[props.timeArr.length -1] * 60
    let min=0
    let add = ((time.m-1) * 60) + (time.s+1)
    let percentage = ((((time.m-1) * 60) + (time.s+1))/totalTime) *100
    console.log("totalTime", totalTime)
  

    return (
        <>
            <div className="clockWrapper">
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={time.s}
                aria-valuemin="0" aria-valuemax='{totalTime}' style={{width: `${percentage}%`, backgroundColor: "#61AB66"}}>
                    {/* <p> {time.m-1}&nbsp;:&nbsp;{(time.s >= 10)? (time.s+1) : "0"+ (time.s+1)}</p> */}
                </div>
            </div>
                    <TimerDisplay changeColor= {changeColor} time={timeleft} />
                    <TimerButtons status={status} resume={resume} stop={stop} reset={reset} start={start}/>
            </div>
        </>    
    )
}

export default Timer