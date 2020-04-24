import React, {useState, useEffect, useRef } from "react"
import Timer from './Timer'
import{Redirect} from 'react-router-dom'
import '../css/startpres.css'
import {Link} from 'react-router-dom'

function StartPres(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [time, setTime] = useState()
    // const [interv, setInterv] = useState();
    // const [status, setStatus] = useState(0);
    // const [changeColor, setChangeColor] = useState(false)
    // const [count, setCount] = useState()
    // const secondsPassed = useRef(0);
   
//     useEffect(()=>{
//         setTime(timeArr[currentIndex])
//     },[])
      
//     useEffect(() => {
//         const id = setInterval(() => {
//           setCount(count + 1)
//         }, 1000)
//         return () => clearInterval(id)
//       }, [count])


//   useEffect(() => {
//     const timeout = setTimeout(() => {

//       setTime(time.s - 1);
//     }, 1000);
//     return () => {
//       clearTimeout(timeout);
//     }
//   }, [time])

    let timeArr = [0]

    if(!props.presentation){
        return <Redirect to="/"/>
    }

    // const start = () => {
    //     run();
    //     setStatus(1)
    //     setInterv(setInterval(run, 1000));
    // };

    // let updatedMs;
    // let updatedS;
    // let updatedM;
    // let updatedH;
    
    // if(time){
    //     updatedMs = time.ms
    //     updatedS = time.s 
    //     updatedM = time.m
    //     updatedH = time.h
    // }


    // const run = () => {
    //     if(updatedM = 0){
    //         updatedH -= 1;
    //         updatedM = 60;
    //     }
    //     if(updatedS = 0) {
    //         updatedM -= 1;
    //         updatedS = 60;
    //     }
    //     if(updatedMs = 0) {
    //         updatedS -= 1;
    //         updatedMs = 100;
    //     }
    //     updatedMs =- 1;
    //     return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
    // };

    // const stop = () => {
    //     clearInterval(interv)
    //     setStatus(2)
    // };

    // const reset = () => {
    //     clearInterval(interv)
    //     setStatus(0)
    //     setTime(timeArr[currentIndex])
    // };
    // const resume = () => start();



    const renderslides = props.presentation.sections.map((section, index)=> {
        let number = Number(section.time) + timeArr[index]
        timeArr.push(number)
        console.log('timeArr', timeArr)
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


    return(
        <div className="main-section">
            <div className="buttons">
               <Link to='/pres'><i class="fas fa-times"></i></Link>
            </div>
        <Timer timeArr={timeArr} currentIndex={currentIndex} length={renderslides.length} currentTime={timeArr[currentIndex]}/>
        <div className="slides">
            {renderslides[currentIndex]}
            <div className="controlSlideButtons">
                <i onClick= {() => {if(currentIndex != 0){setCurrentIndex(currentIndex -1)}}} class="fas fa-chevron-left"></i>
                <i onClick={() => {if(currentIndex != renderslides.length-1){setCurrentIndex(currentIndex +1)}}} class="fas fa-chevron-right"></i>
            </div>
        </div>
        </div>
    )
}
export default StartPres