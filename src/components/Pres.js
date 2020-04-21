import React from 'react'

function Pres(props) {
    console.log('Pres-props', props)
    if(!props.presentation){
        return <></>
    }

  
         
            
    return (
        <>
            <h1>Pres Page</h1>
            <h2>Title: {props.presentation.name}</h2>
        </>
    )
}

export default Pres