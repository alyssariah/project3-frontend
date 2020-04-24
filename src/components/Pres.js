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
                <Points points={section.talking_points} section={section} index={index} />
        )
    })
         
            
    return (
        <div className="presMain">
            <Link to='/update'><i class="far fa-edit"></i></Link>
            <h2>Title: {props.presentation.name}</h2>
            <div className="startTimerClass"><Link to="/timer"><container className="startButton"><span classname="startPresSpan">Start</span></container></Link></div>
            {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default Pres