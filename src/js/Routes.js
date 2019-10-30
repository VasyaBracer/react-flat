import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfilePage from "../Components/ProfilePage";
import ShowFlatsPage from "../Components/FlatsPage";
import HomePage from "../Components/HomePage"

export default class Routes extends React.PureComponent {
    render() {
    return (
    <Router>
    {this.props.children}
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/flats" component={ShowFlatsPage} />
        <Route path="/" component={HomePage} />
      </Switch> 
    </Router>
    );
    }
  }