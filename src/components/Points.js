import React from 'react'

function Points(props) {
    console.log('points-prop', props)
    const renderPoints = props.points.map((point, index) => {
        return (
                <li>{point.point}</li>
    
        )
    })
    return (
        <>
            {renderPoints}
        </>
    )
}

export default Points