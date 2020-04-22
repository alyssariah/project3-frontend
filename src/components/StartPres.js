import React, {useState} from "react"
import Timer from './Timer'

function StartPres(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    let timeArr = [0]

    if(!props.presentation){
        return <></>
    }

    const renderslides = props.presentation.sections.map((section, index)=> {
        // if((section.time + timeArr[index]) === time.s){
           
        // }
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
                <i onClick= {() => setCurrentIndex(currentIndex -1)}class="fas fa-chevron-left"></i>
                <i onClick= {() => setCurrentIndex(currentIndex + 1)}class="fas fa-chevron-right"></i>
            </div>
        </div>
        </>

    )
}
export default StartPres