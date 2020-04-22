import React, {useState, useEffect} from "react"
import '../css/pres.css'
import UpdateSect from './UpdateSect'
import {updatePres} from '../services/api-helper'


function UpdatePres(props) {   
    console.log('props at top', props)
    const [name, setName] = useState(props.presentation.name) 
    const [freshName, setFreshName] = useState(props.presentation.name)

    const [showEdit, setShowEdit] = useState(false)

    // useEffect(() => {
    //     // Update the presentation name using the input from form beelow / browser API
    //     props.presentation.name = {freshName};
    //   });
    
    let totalTime = 0

    // console.log('Pres-props', props)

    if(!props.presentation){
        return <></>
    }
    
    const nameChange = (e) => {
        setName(e.target.value)
        setFreshName(e.target.value)
    }

    const presNameSubmit = async(e) => {
        e.preventDefault()
        const json = await updatePres(props.presentation._id, {"name": name})
        setShowEdit(false)
        // getSections()
    }

    const renderSections = props.presentation.sections.map((section, index) => {
        totalTime += section.time
        return (
           <UpdateSect section={section} inedx={index}/>
        )
    })
            
    return (
        <div className="updatePresMain">
            <h2><i onClick= {()=>setShowEdit(!showEdit)} class="far fa-edit"></i>{freshName}</h2>
            {
                showEdit &&<form className="nameForm" onSubmit={presNameSubmit}>
                <p><label>Presentation Name: </label><input type="text" value={name} onChange={nameChange} required="required"/></p>
                <button>update</button>
                </form>
             }
        {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default UpdatePres