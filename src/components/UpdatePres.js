import React, {useState} from 'react'
import '../css/pres.css'
import UpdateSect from './UpdateSect'

function UpdatePres(props) {   
    const [name, setName] = useState('') 
    const [showEdit, setShowEdit] = useState(false)
    
    let totalTime = 0

    console.log('Pres-props', props)

    if(!props.presentation){
        return <></>
    }
    
    const nameChange = (e) => {
        setName(e.target.value)
    }

    const presNameSubmit = async(e) => {
        e.preventDefault()
        const json = await UpdatePres(props.pres._id, {"name": name})
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
            <h2><i onClick= {()=>setShowEdit(!showEdit)} class="far fa-edit"></i>{props.presentation.name}</h2>
            {
                showEdit &&<form className="nameForm" onSubmit={presNameSubmit}>
                <p><label>Presentation Name: </label><input type="text"  value={name} onChange={nameChange} required="required"/></p>
                <button>update</button>
                </form>
             }
        {renderSections}
            <p className="time">Total time: {totalTime}</p>
        </div>
    )
}

export default UpdatePres