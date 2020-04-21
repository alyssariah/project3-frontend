import React from 'react'

function TimerButton(props) {
    return (
        <div>
            {(props.status === 0)?
              <button className="timer-btn timer-btn-gre"
              onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
              <div>
                  <button className="timer-btn timer-btn-red"
                        onClick={props.stop}>Stop</button>
                  <button className="timer-btn timer-btn-red"
                        onClick={props.reset}>Reset</button>
              </div> : ""
            }   
            
        </div>
    )
}

export default TimerButton