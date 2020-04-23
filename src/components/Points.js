import React, {useState} from 'react'

function Points(props) {
    const [showPoints, setShowPoints] = useState(false)
    const [toggleWord, setToggleWord] = useState(true)
    const renderPoints = props.points.map((point, index) => {
        return (
                <li>{point.point}</li>
        )
    })
    
    return (
        <>
            {showPoints && <ul>{renderPoints}</ul>}
            <button onClick={()=>{
                setShowPoints(!showPoints)
                setToggleWord(!toggleWord)}
                }>{toggleWord? "show": "hide"} talking points</button>
        </>
    )
}

export default Points