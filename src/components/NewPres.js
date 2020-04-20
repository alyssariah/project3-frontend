import React, {useState, useEffect} from 'react'
import {createPres, getPresById} from '../services/api-helper'
import {createSect} from '../services/section-api-helper'


function NewPres(){
    const[showForm, setShowForm] = useState(false)
    const[showStart, setShowStart] = useState(true)
    const [name, setName] = useState('')
    const[presID, setPresID] = useState()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const nameSubmit = () => {
        const json = createPres({"name": name})
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
    const sectionSubmit = () => {
        const json = createSect({"title": title, "time": time})
    }
    const presentation = getPresById(presID)
    const rendersections = presentation.sections.map((section, index)=> {
        return(
            <p>{section.title} {section.time}</p>
        )
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

        <form onSubmit={sectionSubmit}>
            <h4>Add A Section</h4>
            <input type="text" name="title" onChange={titleChange}/>
            <input type="text" name="time"onChange={timeChange}/>
            <button>+</button>
        </form>
        }
        </>

    )
}
export default NewPres