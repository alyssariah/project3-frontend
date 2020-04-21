import React, {useState, useEffect} from "react"
import { getAllPres} from '../services/api-helper'
import '../css/home.css'
import { Link} from 'react-router-dom';

function Home(props){

    const [pres, setPres] = useState([])
    const [isLoading, setIsloading] = useState(true)

    
  

    useEffect(() => {
        const makeAPICall = async () => {
          const resp =  await getAllPres() 
          setPres(resp)
          setIsloading(false)
        }
        makeAPICall()
      }, [])

      const BlastOff =(presentation)=>{
        console.log("houston, all blue skies from here", presentation)
        
         props.clickPresentation(presentation)
      }

    const renderPres = pres.map( (pres, index) => {
        return (
          <div key={index} className="presList" onClick ={()=>BlastOff(pres)}>
           <h2>{pres.name}</h2>
          </div> 
          )
      })
      

  return (

    <div className="main">
      {!isLoading && <div className="presentationsGroup">{renderPres}</div>}
      <button><Link to ="/new">New Presentation</Link></button>
      
      
      
    </div>
    
)}
export default Home