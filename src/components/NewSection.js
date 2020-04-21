import React,{useState} from 'react'
import { createTalk } from '../services/talkpoint-api-helper'


function NewSection(props) {
    const [valuepoint, setValuePoint] = useState('')
    const pointChange = (e) => {
        setValuePoint(e.target.value)
    }

    const pointSubmit = async(sectionInput) => {
        const json = await createTalk(sectionInput, {"point": valuepoint})
        setValuePoint('')
        props.pointSubmit(sectionInput)
    }
    const renderPoints = props.section.talking_points.map((point, index) => {
        console.log("my points", point)
        if(props.section.talking_points.length > 0){
            return(
                <li key={index}>{point.point}</li>
            )
        }
    })
  return(
    <div>
        <p>{props.section.title} {props.section.time}</p> 
        <ul>{renderPoints}</ul>
        <label className="pointLabel">Add Talking Point: </label> <input type="text" value={valuepoint} onChange={pointChange}/>
        <button onClick={() => pointSubmit(props.section._id)}>+</button>
    </div>
  )
}

export default NewSection


