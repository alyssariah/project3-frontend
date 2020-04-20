import React from 'react'
import {createPresentation, createSection, createTalkingPoint} from '../services/api-helper'


function CreateForm(){
    const[showForm, setShowForm] = useState(false)
    const[showStart, setShowStart] = useState(true)
    const [name, setName] = useState('')
    const[presID, setPresID] = useState()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const[sectID, setSectID] = useState()

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = () => {
        const json = createPresentation({"name": name})
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
    const handleFormSubmit = () => {
        const json = createSection({"title": title, "time": time})
        setSectID(json._id)
    }

    return(
        <>
        <h1>Create a New Project</h1>
        {showStart && 
        <div className="addProject">
            <label>Project Name</label> <input type="text" value={name} onChange={nameChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        }

        {showForm && 
        <form onSubmit={handleFormSubmit}>
            <h4>Add A Section</h4>
            <input type="text" name="title" onChange={titleChange}/>
            <input type="text" name="time"onChange={timeChange}/>
            <button>+</button>
        </form>
        }
        </>

    )
}
export default CreateForm