import React from 'react'

function TimerButton(props) {
    return (
        <div className="controlButtons">
            {(props.status === 0)?
              <i onClick={props.resume}class="fas fa-play-circle"></i>
              // <button
              // onClick={props.start}>Start</button>
               : ""
            }

            {(props.status === 1)?
              <>
                  {/* <button 
                        onClick={props.stop}>Stop</button> */}
                        <i onClick={props.stop}class="fas fa-stop-circle"></i>
                        <i onClick={props.reset} class="fas fa-redo"></i>
                  {/* <button 
                        onClick={props.reset}>Reset</button> */}
              </> : ""
            } 

            {(props.status === 2)?
              <>
                  {/* <button 
                        onClick={props.resume}>Resume</button> */}
                        <i onClick={props.resume}class="fas fa-play-circle"></i>
                        <i onClick={props.reset} class="fas fa-redo"></i>
                  {/* <button 
                        onClick={props.reset}>Reset</button> */}
              </> : ""
            }    
            
        </div>
    )
}

export default TimerButton