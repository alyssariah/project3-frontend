import React, {useState} from 'react'
import '../css/pres.css'
import {deleteTalk, updateTalk} from '../services/talkpoint-api-helper'

        
function UpdatePoint(props){
    const [pointBullet, setPointBullet] =useState(props.points)
    const [subFormReset, setSubFormReset] = useState('')
    const[updatePointTalk, setUpdatePointTalk] = useState('')
    const [currentPoint, setCurrentPoint] = useState()

    const updatingPoint =(e)=>{
        setUpdatePointTalk(e.target.value)
    }

   const handleEdit = async(e) => {
    e.preventDefault()
    const json = await updateTalk(props.point._id, {"point": updatePointTalk})
    props.renderPage()
    }

    const handleDelete = async ()=> {
        const json = await deleteTalk(props.point._id)
        props.renderPage()
    }


    return(
        <div className ="changeTalkpoints">
           <li>Talking Point: {props.point.point}</li> 
            <button onClick={handleDelete}>Delete </button>
            <form onSubmit={handleEdit}>
                <input type="text" value ={updatePointTalk} onChange ={updatingPoint}/>
                <button>Update</button>
            </form>
        </div>
        )
    }
export default UpdatePoint
