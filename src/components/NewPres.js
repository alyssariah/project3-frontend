import React, {useState, useEffect} from 'react'
import {createPres, getPresById} from '../services/api-helper'
import {createSect} from '../services/section-api-helper'


function NewPres(){
    const[showForm, setShowForm] = useState(false)
    const[showStart, setShowStart] = useState(true)
    const[sections, setSections] = useState([])
    const [name, setName] = useState('')
    const[presID, setPresID] = useState()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState()

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const nameSubmit = async() => {
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
    const sectionSubmit = async() => {
        const json = await createSect(presID, {"title": title, "time": time})
        console.log("sections", json)
        setTime('')
        setTitle('')
        getSections()
    }

    const getSections = async() => {
        const presentation = await getPresById(presID)
        console.log("presentation", presentation)
        setSections(presentation.sections)
    }
    const rendersections = sections.map((section, index)=> {
        if(sections.length>0){
        return(
            <p>{section.title} {section.time}</p>
        )
        }
    })

    return(
        <>
        <h1>Create a New Project</h1>
        {showStart && 
        <div className="addProject">
            <label>Project Name</label> <input type="text" value={name} onChange={nameChange}/>
            <button onClick={nameSubmit}>Submit</button>
        </div>
        }
        {showForm && 
        <> 
            <div>
                <h3>{name}</h3>
                {rendersections}
            </div>
        <div>
            <h4>Add A Section</h4>
            <input type="text"  value={title} onChange={titleChange}/>
            <input type="text" value={time} onChange={timeChange}/>
            <button onClick={sectionSubmit}>+</button>
        </div>
        </>
        }
        </>

    )
}
export default NewPres