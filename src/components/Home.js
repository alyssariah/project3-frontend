import React, {useState, useEffect} from "react"
import { getAllPres, deletePres} from '../services/api-helper'
import '../css/home.css'
import { Link} from 'react-router-dom';

function Home(props){

    const [pres, setPres] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [showButt,setShowButt] =useState(false)
   

    
    useEffect(() => {
        const makeAPICall = async () => {
          const resp =  await getAllPres() 
          setPres(resp)
          setIsloading(false)
        }
        makeAPICall()
      }, [])


      const handleDelete = async (id) => {
        const json = await deletePres(id)
        console.log('handleDelete - json', json)
        
          const presArr = pres.filter( trashed => trashed._id !== id)
          setPres(presArr)
        
      }
      //1. passes backend delete the id of the presentation clicked
      //2 .filter over the state presentation array that was grabbed
      // when importing all of them  (because of setPres pushing 
      //in the response of the api call)
      //3. run a filter over the presentation state array. put all the presentations
      //into a new array that do not equal the clicked upon id
      // set you presentation state to the new filtered array
     



      const BlastOff =(presentation)=>{
        // console.log("houston, all blue skies from here", presentation)
         props.clickPresentation(presentation)
      }

      const buttFunction =()=>{
        setShowButt(!showButt)
      }



    const renderPres = pres.map( (pres, index) => {
        return (
          <div key={index} className="presList">
           <Link to ="/pres">
           <h2 onClick ={()=>BlastOff(pres)} >{pres.name}</h2>
           </Link>
           {showButt &&
           <i onClick={() =>handleDelete(pres._id)} class="far fa-trash-alt"></i>}
          </div> 
          )
      })
      

  return (

    <div className="main">
      <div className="buttons">
      <button><Link to ="/new">Create Presentation</Link></button>
      <button onClick={buttFunction}>Delete Presentation</button>
      </div>
      {!isLoading && <div className="presentationsGroup">{renderPres}</div>}
    </div>
    
)}
export default Home