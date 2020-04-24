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
    const [doneEditing, setDoneEditing]= useState(true)
    // const [editTalkPoint, setEditTalkPoint]=useState(false)


    const updatingPoint =(e)=>{
        setUpdatePointTalk(e.target.value)
    }

    
const showUpdateFormUpdatePoint = ()=>{
    setShowUpdateForm(!showUpdateForm)
    setHideTalkPointEditing(!hideTalkPointEditing)
    setDoneEditing(!doneEditing)
    // setEditTalkPoint(!editTalkPoint)
}

   const handleEdit = async(e) => {
    e.preventDefault()
    const json = await updateTalk(props.point._id, {"point": updatePointTalk})
    showUpdateFormUpdatePoint()
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
                <li><input type="text" value ={updatePointTalk} onChange ={updatingPoint} placeholder ={props.point.point}/>{!doneEditing && <a onClick={showUpdateFormUpdatePoint}> Back </a>}
                <button> Update</button>
                </li>
            </form></span>}
            {hideTalkPointEditing &&
            <span>
               <li>Talking Point: {props.point.point}
               {doneEditing&& <span><a onClick={showUpdateFormUpdatePoint}> Edit </a><i className ="far fa-window-close" onClick={handleDelete}/></span>}
               </li> 
               </span>}
        </div>
        )
    }
export default UpdatePoint
