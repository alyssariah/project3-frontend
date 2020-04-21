import React, {useState, useEffect} from 'react'
import {createPres, getPresById} from '../services/api-helper'
import {createSect, findById} from '../services/section-api-helper'
import NewSection from './NewSection.js'
import '../css/newpres.css'
import {Link} from "react-router-dom"



function NewPres(props){
    const[showForm, setShowForm] = useState(false)
    const[showStart, setShowStart] = useState(true)
    const[sections, setSections] = useState([])
    const [name, setName] = useState('')
    const[presID, setPresID] = useState()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState()
    const [totalTime, setTotalTime] = useState(0)


    const nameChange = (e) => {
        setName(e.target.value)
    }
    const nameSubmit = async(e) => {
        e.preventDefault()
        const json = await createPres({"name": name})
        console.log("json", json)
        setPresID(json._id)
        setShowStart(false)
        setShowForm(true)
    }
    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const timeChange = (e) => {
        setTime(e.target.value)
    }

    const sectionSubmit = async(e) => {
        e.preventDefault()
        const json = await createSect(presID, {"title": title, "time": time})
        console.log("sections", json)
        setTotalTime(Number(time) + Number(totalTime))
        setTime('')
        setTitle('')
        getSections()
    }

    const getSections = async() => {
        const presentation = await getPresById(presID)
        console.log("presentation", presentation)
        setSections(presentation.sections)
    }

    const pointSubmit = async() => {
        const presentation = await getPresById(presID)
        setSections(presentation.sections)
    }

    const rendersections = sections.map((section, index)=> {
        if(sections.length>0){
        return(
            <NewSection section={section} pointSubmit={pointSubmit} index={index}/>
        )
        }
    })

    const Blastoff = async() => {
        const presentation = await getPresById(presID)
        props.clickPresentation(presentation)
    }

    return(
        <div className="newPresMain">
        <h1>Create a New Project</h1>
        {showStart && 
        <div className="addProject">
            <form onSubmit={nameSubmit}>
            <label>Project Name: </label> <input className="name" type="text" value={name} onChange={nameChange} required="required"/>
            <button>Submit</button>
            </form>
        </div>
        }
        {showForm && 
        <div className="fullpage"> 
            <div className="includeTitle">
                <h2>{name}</h2>
                {rendersections}  
             <h4>Add a section: </h4>
            <form onSubmit={sectionSubmit}>
            <p><label>Title: </label><input type="text"  value={title} onChange={titleChange} required="required"/></p>
            <p><label>Time: </label><input type="text" value={time} onChange={timeChange} required="required"/></p>
            <button className="addSection">+ Add</button>
            </form>
            <p className="time">Total time: {totalTime}</p>
            <Link to="/pres"><button className="doneButton" onClick={Blastoff}>Done!</button></Link>
        </div>
        </div>
        }
        </div>

    )
}
export default NewPres