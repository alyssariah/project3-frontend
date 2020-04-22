import React, {useState} from 'react'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'
import '../css/timer.css'

function Timer(props) {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0)
    // 0 = not started
    // 1 = started
    // 2 = pause

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
        setTime({ms:0, s:0, m:0, h:0})
    };
    const resume = () => start();
    
    if(!props.presentation){
        return <></>
    }

    const renderslides = props.presentation.sections.map((section, index)=> {
        const talkingpoints = section.talking_points.map((point, index)=> {
            return(
                <li key={index}>{point.point}</li>
            )
        })
        return(
            <div index={index}>
                <h1>{section.title}</h1>
                <ul>{talkingpoints}</ul>
            </div>
        )
    })

    return (
        <div className="main-section">
            <div className="clockWrapper">
                <div className="timer">
                    <TimerDisplay time={time} />
                    <TimerButtons status={status} resume={resume} stop={stop} reset={reset} start={start}/>
                </div>
            </div>
            <div className="slides">
                {renderslides[currentIndex]}
                <div className="controlSlideButtons">
                <button onClick= {() => setCurrentIndex(currentIndex -1)}>Previous</button>
                <button onClick= {() => setCurrentIndex(currentIndex + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Timer