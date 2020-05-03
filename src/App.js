import React from 'react';
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn";
import SmallNav from "./components/Nav/SmallNav";
import Nav from "./components/Nav/Nav";
class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Nav/>
            <SmallNav/>
            <Switch>
              <Route exact path='/' component={Home}/>
                <Route exact path='/logowanie' component={LogIn}/>
            </Switch>
          </div>
        </Router>
    );
  }

}

export default App;
