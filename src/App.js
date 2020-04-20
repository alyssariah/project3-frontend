import React from 'react';
import Home from './components/Home';
import Pres from './components/Pres';
import NewPres from './components/NewPres';
import UpdatePres from './components/UpdatePres';

import "./styles.css"
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    app here
    </div>
    <Home />
    <Switch>
	      <Route exact path="/" component={Home}/>
	      <Route exact path="/pres" component={Pres}/>
        <Route exact path="/new" component={NewPres}/>
        <Route exact path="/update" component={UpdatePres}/>
       <Redirect to="/"/>
    </Switch>
    </>
  );
}

export default App;
