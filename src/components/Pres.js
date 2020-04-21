import React from 'react'
import Points from './Points'

function Pres(props) {
    console.log('Pres-props', props)
    if(!props.presentation){
        return <></>
    }

    const renderSections = props.presentation.sections.map((section, index) => {
        return (
            <div>
                <h3>{section.title} {section.time}</h3>
                <ul>
                    <Points points={section.talking_points} />
                </ul>
            </div>
        )
    })
         
            
    return (
        <div className="presMain">
            <h1>Pres Page</h1>
            <h2>Title: {props.presentation.name}</h2>
            {renderSections}
        </div>
    )
}

export default Pres