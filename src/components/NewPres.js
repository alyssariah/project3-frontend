import React, {useState, useEffect} from 'react'
import {createPres, getPresById} from '../services/api-helper'
import {createSect, findById} from '../services/section-api-helper'
import '../css/newpres.css'
import { createTalk } from '../services/talkpoint-api-helper'


function NewPres(){
    const[showForm, setShowForm] = useState(false)
    const[showStart, setShowStart] = useState(true)
    const[sections, setSections] = useState([])
    const [name, setName] = useState('')
    const[presID, setPresID] = useState()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState()
    const [totalTime, setTotalTime] = useState(0)
    const [point, setPoint] = useState('')
    const [sectId, setSectId] = useState()
    const [pointsArr, setPointsArr] = useState([])

    const total = 0;

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
    const pointChange = (e) => {
        setPoint(e.target.value)
    }

    const sectionSubmit = async() => {
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

    const pointSubmit = async(sectionInput) => {
        const json = await createTalk(presID, sectionInput, {"point": point})
        setPoint('')
        setSectId(sectionInput)
        getPoints()
    }

    const getPoints = async() => {
        const section = await findById(sectId)
        console.log('section', section)
        setPointsArr(section.talking_points)
    }

    const renderPoints = pointsArr.map((point, index) => {
        if(pointsArr.length > 0){
            return(
                <li>{point.point}</li>
            )
        }
    })

    const rendersections = sections.map((section, index)=> {
        if(sections.length>0){
        return(
            <div>
            <p>{section.title} {section.time}</p>
            <ul>{renderPoints}</ul>
            <label className="pointLabel">Add Talking Point: </label> <input type="text" value={point} onChange={pointChange}/>
            <button onClick={() => pointSubmit(section._id)}>+</button>
            </div>
        )
        }
    })

    return(
        <div className="main">
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
        <p>Total time: {totalTime}</p>
        </>
        }
        </div>

    )
}
export default NewPres