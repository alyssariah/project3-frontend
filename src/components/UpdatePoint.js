import React, {useState, useEffect} from 'react'
import '../css/pres.css'
import {deleteTalk, createTalk, updateTalk} from '../services/talkpoint-api-helper'

        //I NEED TO SEND IN PROPS WHICH WILL BE THE FROM THE INDIVIDUAL SECTION**
function UpdatePoint(props){
    const [pointBullet, setPointBullet] =useState(props.points)
    const [subFormReset, setSubFormReset] = useState('')//sub form reset
    const[updatePointTalk, setUpdatePointTalk] = useState('')
    const [currentPoint, setCurrentPoint] = useState()
    // const[addingTalk, setAddingTalk] = useState('')

    const updatingPoint =(e)=>{
        setUpdatePointTalk(e.target.value)
    }

    // const handleAdd = async(e) => {
    //     e.preventDefault()
    //     const json = await createTalk(props.sectionID,{"point": singleTalk})
    //     setTalkpointId(json._id)
    //     //this is editing a single value
    // }

// const HandleaddingTalk =(e)=>{
//         setAddingTalk(e.target.value)
//         console.log('passing this to setAddingTalk', e)
//     }
    
// const handleAdd = async(e) => {
//     e.preventDefault()
//     console.log("WHAT IM SENIDNG TO THR BACKEND", addingTalk)
//     const json = await createTalk(props.sectionID,{"point": addingTalk})
//     console.log("HERE IS THE JSON DATA FROM WHERE YOU ARE adding",json)
//     }
    
    

   const handleEdit = async(e) => {
    e.preventDefault()
    const json = await updateTalk(props.point._id, {"point": updatePointTalk})
    props.renderPage()
    }

    const handleDelete = async ()=> {
        const json = await deleteTalk(props.point._id)
        console.log('handleDelete - json', json)
        // const talkingArr = pointBullet.filter( pointFromASection => pointFromASection._id !== id)
        // setPointBullet(talkingArr)
        props.renderPage()
        // console.log('here is the talking array that im filtering',talkingArr)
        //this is creating a new array and reassining the props as such
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
