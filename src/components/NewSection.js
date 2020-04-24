import React,{useState} from 'react'
import { createTalk } from '../services/talkpoint-api-helper'


function NewSection(props) {
    const [valuepoint, setValuePoint] = useState('')
    const pointChange = (e) => {
        setValuePoint(e.target.value)
    }

    const pointSubmit = async(e) => {
        e.preventDefault()
        const json = await createTalk(props.section._id, {"point": valuepoint})
        setValuePoint('')
        props.pointSubmit(props.section._id)
    }
    const renderPoints = props.section.talking_points.map((point, index) => {
        if(props.section.talking_points.length > 0){
            return(
                <li key={index}>{point.point}</li>
            )
        }
    })
    
  return(
    <div className="section">
        <p>Section {props.index + 1}: {props.section.title} {props.section.time}</p> 
        {renderPoints.length> 0 && <ul>{renderPoints}</ul>}
        <form onSubmit= {pointSubmit}>
        <label className="pointLabel">Add Talking Point: </label> <input type="text" value={valuepoint} onChange={pointChange} required="required"/>
        <button>+</button>
        </form>
    </div>
  )
}

export default NewSection


