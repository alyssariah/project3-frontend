import React, { useState,  useContext} from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';
import Toggle from './components/Toggle';
import Pres from './components/Pres'
import Timer from './components/Timer'
import StartPres from './components/StartPres'

import Home from './components/Home';
import NewPres from './components/NewPres';
import UpdatePres from './components/UpdatePres';

import "./App.css"
import { Link, Switch, Route, Redirect } from 'react-router-dom';



function App() {
  const [theme, setTheme] = useState('light');
  const[showInstructions, setShowInstructions] = useState(false)
  const [presentation, setClickPresentation] = useState()
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  
  
  const clickPresentation =( pres)=>{
    setClickPresentation(pres)
  }

  return (
    <>
    <header><Link to ="/"><h1><i class="fas fa-home"></i>Presentation <span>Buddy</span></h1></Link><i onClick={() => setShowInstructions(!showInstructions)} className="fas fa-info-circle"></i></header>
    {showInstructions && 
      <div className="instructions">
        <ul>
        <span className="closeInstructions" onClick={() => setShowInstructions(!showInstructions)}><i className="fas fa-times-circle"></i></span> 
            <h4>Instructions</h4>
            <p><strong>Presentation Buddy helps you plan your presentation and stay on track.</strong></p>
              <ol>
                <li>Create and name your new presentation, or open a saved one / example.</li>
                <li>Add to and edit your presentation with sections, estimated time per section, and talking points.</li>
                <li>You're ready! As the timer counts down, it turns <span className="redtext"><strong>red</strong></span> when it’s time for the next section. Pause or skip sections along the way.</li>
              </ol>
            <p>Designed and built by <a href="https://www.linkedin.com/in/alyssa-riah-jackson/" target="_blank">Alyssa Jackson</a>, <a href="https://www.linkedin.com/in/stanleypascua/" target="_blank">Stanley Pascua</a>, <a href="https://www.linkedin.com/in/marshallbrock/" target="_blank">Marshall Brock</a>, and <a href="https://www.linkedin.com/in/carolynnickell/" target="_blank">Carolyn Nickell</a> through General Assembly.</p>
          </ul>
        </div>}
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
         <>
        <GlobalStyles />
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <Toggle theme={theme} toggleTheme={toggleTheme} />
       {/* <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}
        </>
    </ThemeProvider>
    <Switch>
	      <Route exact path="/" render = {() => < Home clickPresentation={clickPresentation}/>}/>
	      <Route exact path="/pres" render={()=> <Pres presentation = {presentation} clickPresentation = {clickPresentation}/>}/> 
        <Route exact path="/new" render={()=> <NewPres clickPresentation = {clickPresentation}/>}/>
        <Route exact path="/timer" render={()=> <StartPres presentation = {presentation} />} />
        <Route exact path="/update" render={()=> <UpdatePres presentation = {presentation} />}/>
        <Redirect to="/"/>
    </Switch>

    </>
  );
}

export default App;
