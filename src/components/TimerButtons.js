import React from 'react'

function TimerButton(props) {
    return (
        <div className="controlButtons">
            {(props.status === 0)?
              <button
              onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
              <>
                  <button 
                        onClick={props.stop}>Stop</button>
                  <button 
                        onClick={props.reset}>Reset</button>
              </> : ""
            } 

            {(props.status === 2)?
              <>
                  <button 
                        onClick={props.resume}>Resume</button>
                  <button 
                        onClick={props.reset}>Reset</button>
              </> : ""
            }    
            
        </div>
    )
}

export default TimerButton