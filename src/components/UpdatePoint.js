import React, {useState} from 'react'
import '../css/pres.css'
import {deleteTalk, updateTalk} from '../services/talkpoint-api-helper'

function UpdatePoint(props){
    const [pointBullet, setPointBullet] =useState(props.points)
    const [subFormReset, setSubFormReset] = useState('')
    const[updatePointTalk, setUpdatePointTalk] = useState('')
    const [currentPoint, setCurrentPoint] = useState()
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [hideTalkPointEditing, setHideTalkPointEditing]= useState(true)


    const updatingPoint =(e)=>{
        setUpdatePointTalk(e.target.value)
    }

    
const showUpdateFormUpdatePoint = ()=>{
    setShowUpdateForm(!showUpdateForm)
    setHideTalkPointEditing(!hideTalkPointEditing)
}

   const handleEdit = async(e) => {
    e.preventDefault()
    const json = await updateTalk(props.point._id, {"point": updatePointTalk})
    props.renderPage()
    }

    const handleDelete = async ()=> {
        const json = await deleteTalk(props.point._id)
        console.log('handleDelete - json', json)
        props.renderPage()

    }


    return(
        <div className ="changeTalkpoints">
           
            {showUpdateForm &&
            <span>
            <form onSubmit={handleEdit}>
                <input type="text" value ={updatePointTalk} onChange ={updatingPoint} placeholder ={props.point.point}/>
                <button>Update</button>
            </form><i className ="far fa-trash-alt" onClick={handleDelete}/></span>}
            {hideTalkPointEditing &&
               <li>Talking Point: {props.point.point}</li> }
           <i className="far fa-edit" onClick={showUpdateFormUpdatePoint}/>
        </div>
        )
    }
export default UpdatePoint
