import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Timer from 'container/timer';
import NotFound from 'container/notFound';

class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/timer/:section" component={Timer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
