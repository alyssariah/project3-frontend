import React, {useState, useEffect} from 'react'
import '../css/pres.css'
import {deleteTalk, createTalk, updateTalk} from '../services/talkpoint-api-helper'

        //I NEED TO SEND IN PROPS WHICH WILL BE THE FROM THE INDIVIDUAL SECTION**
function UpdatePoint(props){
const[updatePoint, setUpdatePoint] = useState("")
  
const [pointBullet, setPointBullet] =useState(props.points)
// const [isLoading, setIsloading] = useState(true)
//const [singleTalk, setsinglePoint] = useState(props.point.points)//this is a single point
const [subFormReset, setSubFormReset] = useState('')//sub form reset


//ITS GETTING ARRAY OF OBJECT TALKPOINTS FROM THE SECT CLICKED
console.log("props.points from updatePoint", props.points)
console.log("props.points.point from updatePoint", props.points[0].point)
console.log('this is state', pointBullet)
//renders and array of objects


    useEffect((e) => {
        const makeAPICall = async () => {
          const resp =  await deleteTalk()
          setPointBullet(resp)
        }
        makeAPICall()
      }, [])

    

    // const handleAdd = async(e) => {
    //     e.preventDefault()
    //     const json = await createTalk(props.sectionID,{"point": singleTalk})
    //     setTalkpointId(json._id)
    //     //this is editing a single value
    // }



   const handleEdit = async(e) => {
    e.preventDefault()
    const json = await updateTalk(props.points._id, {"point": updatePoint})

}

    const handleDelete = async (id)=> {
        const json = await deleteTalk(id)
        console.log('handleDelete - json', json)
        const talkingArr = pointBullet.filter( pointFromASection => pointFromASection._id !== id)
        setPointBullet(talkingArr)
        console.log('here is the talking array that im filtering',talkingArr)
        //this is creating a new array and reassining the props as such
  }

//<button onClick={()=>handleEdit}>update</button>

  //RENDER TALKPOINTS 

  //each one gets a delete and update
  //change button to icons later]
  
  
  const listOfTalkingPoints = props.points.map((individualPoint, index)=>{
  return(
     <span key={index}>    
      <p>Talking Point: {individualPoint.point}</p> 
  <button onClick={()=>handleDelete(individualPoint._id)}>Delete {individualPoint._id}</button>
      
      </span>)
  })


    return(
        <div className ="changeTalkpoints">
            <h1>{listOfTalkingPoints}</h1>
    </div>



    )}
export default UpdatePoint







