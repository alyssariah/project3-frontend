import React, { useState,  useContext} from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';
import Toggle from './components/Toggle';
import Pres from './components/Pres'


import Home from './components/Home';
// import Pres from './components/Pres';
import NewPres from './components/NewPres';
// import UpdatePres from './components/UpdatePres';

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

    <header><Link to ="/"><h1>Presentation Timer</h1></Link><i onClick={() => setShowInstructions(!showInstructions)} className="fas fa-info-circle"></i></header>
    {showInstructions && 
      <div className="instructions">
        <h3>Instructions</h3>
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
	      <Route exact path="/pres" render={()=> <Pres presentation = {presentation}/>}/> 
        <Route exact path="/new" render={()=> <NewPres clickPresentation = {clickPresentation}/>}/>
        {/* <Route exact path="/update" component={UpdatePres}/> */}
       <Redirect to="/"/>
    </Switch>

    </>
  );
}

export default App;
