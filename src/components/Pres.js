import React, {useState} from 'react'
import Points from './Points'
import '../css/pres.css'
import {Link, Redirect} from "react-router-dom"

function Pres(props) {
    let totalTime = 0
    console.log('Pres-props', props)
    if(!props.presentation){
        return <Redirect to="/"/>
    }

    const renderSections = props.presentation.sections.map((section, index) => {
        totalTime += section.time
        return (
            <div>
                <h3>Section {index +1}: {section.title} <span className="timeDisplay">{section.time}</span></h3>
                <Points points={section.talking_points} />
            </div>
        )
    })
         
            
    return (
        <div className="presMain">
            <Link to='/update'><i class="far fa-edit"></i></Link>
            <h2>Title: {props.presentation.name}</h2>
            <Link to="/timer" className="startTimerClass"><button className="startButton">Start Prensentation</button></Link>
            {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default Pres