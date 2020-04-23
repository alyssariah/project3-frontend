import React from 'react'
import Points from './Points'
import '../css/pres.css'
import {Link, Redirect} from "react-router-dom"


function Pres(props) {
    // const [doneEditing, setDoneEditing] =useState(false)
    // const [needsEditing, setneedsEditing] =useState(true)
    
    // const handleDoneEditing = ()=>{
    //     setDoneEditing(!doneEditing)
    //     setneedsEditing(!needsEditing)
    // }
    // const handleEditThisPres = ()=>{
    //     setDoneEditing(!doneEditing)
    //     setneedsEditing(!needsEditing)
    // }
//<button onClick ={handleDoneEditing}>Done Editing</button>

    let totalTime = 0
    if(!props.presentation){
        return <Redirect to="/"/>
    }

    const renderSections = props.presentation.sections.map((section, index) => {
        totalTime += section.time
        return (
            <div className="presSectionDisplay">
                <h3>Section {index +1}: {section.title} <span className="timeDisplay">{section.time}</span></h3>
                <Points points={section.talking_points} />
            </div>
        )
    })
         
            
    return (
        <div className="presMain">
            <div><Link to='/'><button>Back To Presentation List</button></Link></div>
            <Link to='/update'><i class="far fa-edit"></i></Link>
            <h2>Title: {props.presentation.name}</h2>
            <Link to="/timer" className="startTimerClass"><button className="startButton">Start Prensentation</button></Link>
            {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default Pres