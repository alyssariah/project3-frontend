import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/global';
import Toggle from './components/Toggle';


import Home from './components/Home';
// import Pres from './components/Pres';
import NewPres from './components/NewPres';
// import UpdatePres from './components/UpdatePres';

import "./App.css"
import { Link, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  return (
    
    <>
    <header><Link to ="/"><h1>Presentation Timer</h1></Link><div>i</div></header>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
         <>
        <GlobalStyles />
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        </>
    </ThemeProvider>
    <Switch>
	      <Route exact path="/" component={Home}/>
	      {/* <Route exact path="/pres" component={Pres}/> */}
        <Route exact path="/new" component={NewPres}/>
        {/* <Route exact path="/update" component={UpdatePres}/> */}
       <Redirect to="/"/>
    </Switch>

    </>
  );
}

export default App;
