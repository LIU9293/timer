import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Timer from 'container/timer';

class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/timer/:section" component={Timer} />
          <Route path="/timer" component={Timer} />
          <Redirect from="*" to="/timer/1"/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;
