import React, {useState} from 'react'

function Points(props) {
    const [showPoints, setShowPoints] = useState(false)
    const [toggleClass, setToggleClass] = useState(true)
    const renderPoints = props.points.map((point, index) => {
        return (
                <li>{point.point}</li>
        )
    })
    
    return (
        <div className="presSectionDisplay">
            <div className="sectionHeader">
            <i onClick={()=>{
                setShowPoints(!showPoints)
                setToggleClass(!toggleClass)}
                } class={toggleClass? "fas fa-plus": "fas fa-minus"}></i>
            <h3>Section {props.index +1}: {props.section.title} <span className="timeDisplay">{props.section.time}</span></h3>
            </div>
            {showPoints && <ul>{renderPoints}</ul>}
            {/* <button onClick={()=>{
                setShowPoints(!showPoints)
                setToggleWord(!toggleWord)}
                }>{toggleWord? "show": "hide"} talking points</button> */}
        </div>
    )
}

export default Points