import React, {useState, useEffect} from "react"
import { getAllPres, deletePres} from '../services/api-helper'
import '../css/home.css'
import { Link} from 'react-router-dom';

function Home(props){

  const [pres, setPres] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [showDelete,setShowDelete] =useState(false)
  
  
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
    setShowDelete(false)
  }

  const BlastOff =(presentation)=>{
      props.clickPresentation(presentation)
  }

  const deleteFunction =()=>{
    setShowDelete(!showDelete)
  }



  const renderPres = pres.map( (pres, index) => {
      return (
        <main key={index} className="presList">
          <Link to ="/pres">
            <h2 onClick ={()=>BlastOff(pres)} >{pres.name}</h2>
          </Link>
          {/* {showDelete && */}
          <i onClick={() =>handleDelete(pres._id)}class="far fa-window-close"></i>
          {/* // <i onClick={() =>handleDelete(pres._id)}class="fas fa-trash-alt"></i>} */}
        </main> 
        )
    })
      

  return (

    <div className="main">
      <div className="buttons">
      <Link to ="/new"><i class="fas fa-plus-circle"></i></Link>
      </div>
      {!isLoading && <div className="presentationsGroup">{renderPres}</div>}
    </div>
    
  )
}
export default Home