import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "././Login";
import RegisterForm from "././RegisterForm";
import history from "././history";
import Dashboard from "././Dashboard";
import AddCourse from "./AddCourse";
import VideoApp from "././VideoApp";
import NavBar from "././NavBar";
import VisionApp from "././VisionApp";
import TeamApp from "./TeamApp";
import CourseDesc from "./CourseDesc";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/RegisterForm" component={RegisterForm} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/AddCourse" component={AddCourse} />
          <Route path="/VideoApp" component={VideoApp} />
          <Route path="/NavBar" component={NavBar} />
          <Route path="/VisionApp" component={VisionApp} />
          <Route path="/TeamApp" component={TeamApp} />
          <Route path="/Desc" component={CourseDesc} />
        </Switch>
      </Router>
    );
  }
}
