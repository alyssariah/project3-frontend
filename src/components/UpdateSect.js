import React, {useState} from 'react'
import Points from './Points'
import {updateSect, deleteSect} from '../services/section-api-helper'
import UpdatePoint from "./UpdatePoint"
import '../css/updatesec.css'

import {createTalk} from '../services/talkpoint-api-helper'

function UpdateSect(props){
    const [title, setTitle] = useState(props.section.title)
    const [time, setTime] = useState(props.section.time)
    const [showEdit, setShowEdit] = useState(false)
    const [talk, setTalk] = useState('')
   

const handleAdd =async(e)=>{
    e.preventDefault()
    const json = await createTalk(props.section._id,{"point":talk})
    console.log('ADDING the json talkinpoint props.section._id',props.section._id)
    console.log('ADDING the json talkinpoint talk',talk)
    setTalk("")
    props.renderPage()
}
const handleNewTalkingPoint=(e)=>{
    setTalk(e.target.value)
    props.renderPage()
}
    console.log("this is the section id i'm adding a point to,", props.section._id)
    
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
        <div className="sectionPlace"><h3>{props.section.title}<span class="fa-stack"><i onClick= {()=>setShowEdit(!showEdit)}className="far fa-edit"></i><i onClick={handleDelete} className="far fa-trash-alt"></i></span></h3><span className="timeDisplay">{time}</span></div>
        {showEdit &&<form className="sectionForm" onSubmit={sectionSubmit}>
            <p><label>Title: </label><input type="text"  value={title} onChange={titleChange} required="required"/></p>
            <p><label>Time: </label><input type="text" value={time} onChange={timeChange} required="required"/></p>
            <button className="addSection">+ update</button>
        </form>}
          {renderPoints}
          <form onSubmit ={handleAdd}>
                <input type ="text" onChange={handleNewTalkingPoint} value ={talk}>   
                </input>
                <button>add talking</button>
            </form>
        {/* <Points points={props.section.talking_points} /> */}
    </div>
    )
}
export default UpdateSect



