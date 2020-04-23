import React, {useState, useEffect} from "react"
import '../css/pres.css'
import UpdateSect from './UpdateSect'
import {updatePres, getPresById} from '../services/api-helper'
import {Redirect} from 'react-router-dom'


function UpdatePres(props) {   
    console.log('props at top', props.presentation)
    const [name, setName] = useState() 
    const [currentPresentation, setCurrentPresentation] = useState()
    const [currentSections, setCurrentSections] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    
    
    useEffect(() => {
        const APICall = async() => {
            if(props.presentation){
                setName(props.presentation.name)
                setCurrentPresentation(props.presentation)
                setCurrentSections(props.presentation.sections)
            }
        }
       APICall()
    }, []);
    
    let totalTime = 0

    if(!props.presentation){
        return <Redirect to="/"/>
    }

    console.log("current", currentPresentation)
    
    const nameChange = (e) => {
        setName(e.target.value)
    }

    const presNameSubmit = async(e) => {
        e.preventDefault()
        const json = await updatePres(currentPresentation._id, {"name": name})
        setShowEdit(false)
        renderPage()
        // getSections()
    }

    const renderPage = async() => {
        console.log("yes")
        const json = await getPresById(props.presentation._id)
        setName(json.name)
        setCurrentPresentation(json)
        setCurrentSections(json.sections)
    }


    const renderSections = currentSections.map((section, index) => {
        totalTime += section.time
        return (
           <UpdateSect section={section} inedx={index} renderPage={renderPage}/>
        )
    })
            
    return (
        <div className="updatePresMain">
            <h2><i onClick= {()=>setShowEdit(!showEdit)} class="far fa-edit"></i>
            {
                 !showEdit
                 &&
                 <h2>{name}</h2>

             }
             </h2>
           
            
            
            {
                showEdit 
                    &&
                <form className="nameForm" onSubmit={presNameSubmit}>
                        <p>
                            <label>Presentation Name: </label>
                            <input
                                 type="text" 
                                 value={name} 
                                 onChange={nameChange} 
                                 required="required"
                                 />
                        </p>
                    <button>update</button>
                </form>
             }
            
        {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default UpdatePres