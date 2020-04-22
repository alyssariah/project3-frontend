import React, {useState} from 'react'

function TimerSection(props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const timeArr = []
    const renderslides = props.presentation.sections.map((section, index)=> {
        timeArr.push(Number(section.time))
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
        <div className="slides">
                {renderslides[currentIndex]}
                <div className="controlSlideButtons">
                    <i onClick= {() => setCurrentIndex(currentIndex -1)}class="fas fa-chevron-left"></i>
                    <i onClick= {() => setCurrentIndex(currentIndex + 1)}class="fas fa-chevron-right"></i>
                </div>
            </div>
    )

}
export default TimerSection