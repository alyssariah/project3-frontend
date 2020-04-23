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
    const presArr = pres.filter( trashed => trashed._id !== id)
    setPres(presArr)
  }

  const BlastOff =(presentation)=>{
      props.clickPresentation(presentation)
  }

  const buttFunction =()=>{
    setShowButt(!showButt)
  }



  const renderPres = pres.map( (pres, index) => {
      return (
        <main key={index} className="presList">
          <Link to ="/pres">
            <h2 onClick ={()=>BlastOff(pres)} >{pres.name}</h2>
          </Link>
          {showButt &&
          <i onClick={() =>handleDelete(pres._id)} class="far fa-trash-alt"></i>}
        </main> 
        )
    })
      

  return (

    <div className="main">
      <div className="buttons">
      <button><Link to ="/new">Create New</Link></button>
      <button onClick={buttFunction}>Remove</button>
      </div>
      {!isLoading && <div className="presentationsGroup">{renderPres}</div>}
    </div>
    
  )
}
export default Home