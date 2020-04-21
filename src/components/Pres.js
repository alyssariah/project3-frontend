import React from 'react'
import Points from './Points'
import '../css/pres.css'

function Pres(props) {
    console.log('Pres-props', props)
    if(!props.presentation){
        return <></>
    }

    const renderSections = props.presentation.sections.map((section, index) => {
        return (
            <div>
                <h3>Section {index +1}: {section.title} {section.time}</h3>
                <Points points={section.talking_points} />
            </div>
        )
    })
         
            
    return (
        <div className="presMain">
            <h2>Title: {props.presentation.name}</h2>
            {renderSections}
        </div>
    )
}

export default Pres