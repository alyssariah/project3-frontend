import React, {useState} from 'react'
import Points from './Points'
import {updateSect, deleteSect} from '../services/section-api-helper'
import UpdatePoint from "./UpdatePoint"
import '../css/updatesec.css'
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
        props.renderPage()
    }

    const handleDelete = async() => {
        const json = await deleteSect(props.section._id)
        props.renderPage()
    }
    const renderPoints = props.section.talking_points.map((point, index)=> {
        return(
           <UpdatePoint sectionID ={props.section._id} point={point} renderPage={props.renderPage}/>
        )
    })
    return(
        <div>
        <div className="sectionPlace"><h3><span class="fa-stack"><i onClick= {()=>setShowEdit(!showEdit)}className="far fa-edit"></i><i onClick={handleDelete} className="far fa-trash-alt"></i></span>{props.section.title}</h3><span className="timeDisplay">{time}</span></div>
        {showEdit &&<form className="sectionForm" onSubmit={sectionSubmit}>
            <p><label>Title: </label><input type="text"  value={title} onChange={titleChange} required="required"/></p>
            <p><label>Time: </label><input type="text" value={time} onChange={timeChange} required="required"/></p>
            {renderPoints}
            <button className="addSection">+ update</button>
        </form>}
        {/* <Points points={props.section.talking_points} /> */}
    </div>
    )
}
export default UpdateSect



