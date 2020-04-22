import React, {useState} from 'react'
import '../css/pres.css'
import UpdateSect from './UpdateSect'


function UpdatePres(props) {
    let totalTime = 0
    console.log('Pres-props', props)
    if(!props.presentation){
        return <></>
    }


    const renderSections = props.presentation.sections.map((section, index) => {
        totalTime += section.time
        return (
           <UpdateSect section={section} inedx={index}/>
        )
    })
         
            
    return (
        <div className="updatePresMain">
            <h2><i class="far fa-edit"></i>{props.presentation.name}</h2>
            {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default UpdatePres