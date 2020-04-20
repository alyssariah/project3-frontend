import React, {useState, useEffect} from "react"
import { getAllPres} from './services/api-helper'
//createPres, deletePres, updatePres}
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
           <div 
            key={index}>{pres.name}
          </div>)
      })



  

return (<div className="App">

<h1>Hello CodeSandbox</h1>
<button onClick={handleCreate}>Create User</button>
{!isLoading && <ul>{renderUsers}</ul>}
{/* {isLoading ? <ul>{renderUsers}</ul> : ''} */}

</div>
)}
export default Home