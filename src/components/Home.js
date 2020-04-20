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
           <h2 
            key={index} className="presList">{pres.name}
          </h2>)
      })


return (<div className="presentationsGroup">

{!isLoading && <div>{renderPres}</div>}

</div>
)}
export default Home