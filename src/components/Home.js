import React, {useState, useEffect} from "react"
import { getAllPres} from '../services/api-helper'
import '../css/home.css'
//createPres, deletePres, updatePres
function Home(){

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

    const renderPres = pres.map( (pres, index) => {
        return (
          <div key={index} className="presList">
           <h2>{pres.name}</h2>
          </div> 
          )
      })


  return (
    <div className="main">
      {!isLoading && <div className="presentationsGroup">{renderPres}</div>}
    </div>
)}
export default Home