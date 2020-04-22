import React, {useState} from 'react'
import Points from './Points'
import {updateSect} from '../services/section-api-helper'
import UpdatePoint from "./UpdatePoint"
function UpdateSect(props){
    const [title, setTitle] = useState(props.section.title)
    const [time, setTime] = useState(props.section.time)
    const [showEdit, setShowEdit] = useState(false)
    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const timeChange = (e) => {
        setTime(e.target.value)
    }
    const sectionSubmit = async(e) => {
        e.preventDefault()
        const json = await updateSect(props.section._id, {"title": title, "time": time})
        setShowEdit(false)
        // getSections()
    }
    return(
        <div>
        <div className="sectionPlace"><h3><i onClick= {()=>setShowEdit(!showEdit)}class="far fa-edit"></i>{title}</h3><span className="timeDisplay">{time}</span></div>
        {showEdit &&<form className="sectionForm" onSubmit={sectionSubmit}>
            <p><label>Title: </label><input type="text"  value={title} onChange={titleChange} required="required"/></p>
            <p><label>Time: </label><input type="text" value={time} onChange={timeChange} required="required"/></p>
            <UpdatePoint sectionID ={props.section._id} points={props.section.talking_points} /> 
            <button className="addSection">+ update</button>
        </form>}
        {/* <Points points={props.section.talking_points} /> */}
    </div>
    )
}
export default UpdateSect



