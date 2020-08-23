import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from "./Main";
import Editor from "./modules/Main";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/editor" component={Editor} />
          <Route path="/" component={Main} />
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
