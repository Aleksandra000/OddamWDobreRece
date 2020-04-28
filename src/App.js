import React from 'react';
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import './App.css';
import Home from "./components/Home";

class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">

            <Switch>
              <Route exact path='/' component={Home}/>

            </Switch>
          </div>
        </Router>
    );
  }

}

export default App;
