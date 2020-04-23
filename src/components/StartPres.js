import React, {useState} from "react"
import Timer from './Timer'
import{Redirect} from 'react-router-dom'
import '../css/startpres.css'

function StartPres(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    let timeArr = [0]

    if(!props.presentation){
        return <Redirect to="/"/>
    }

    const renderslides = props.presentation.sections.map((section, index)=> {
        console.log('timeArr', timeArr)
        let number = timeArr[index] + Number(section.time)
        timeArr.push(number)
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
        <>
            <Timer timeArr={timeArr} currentIndex={currentIndex} length={renderslides.length}/>
            <div className="slides">
                {renderslides[currentIndex]}
                <div className="controlSlideButtons">
                    <i onClick= {() => {
                        if(currentIndex != 0){setCurrentIndex(currentIndex -1)}}} class="fas fa-chevron-left"></i>
                    <i onClick= {() => {
                        if(currentIndex != renderslides.length-1){setCurrentIndex(currentIndex +1)}}}class="fas fa-chevron-right"></i>
                </div>
            </div>
        </>
    )
}
export default StartPres