import React from 'react';
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import SmallNav from "./components/Nav/SmallNav";
import Nav from "./components/Nav/Nav";
import Register from "./components/Register";
import Form from "./components/Form";
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
                <Route exact path='/wylogowano' component={LogOut}/>
                <Route exact path='/rejestracja' component={Register}/>
                <Route exact path='/oddaj-rzeczy' component={Form}/>
            </Switch>
          </div>
        </Router>
    );
  }

}

export default App;
