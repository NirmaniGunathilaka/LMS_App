import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "././Login";
import RegisterForm from "././RegisterForm";
import history from "././history";
import Dashboard from "././Dashboard";
import AddCourse from "./AddCourse";
import Quiz from "./Quiz";
import ShowQuiz from "./ShowQuiz";
import ViewCourse from "./ViewCourse";


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
                    <Route path="/Quiz:id" component={Quiz} />
                    <Route path="/ShowQuiz" component={ShowQuiz} />
                    <Route path="/ViewCourse" component={ViewCourse} />
                </Switch>
            </Router>
        )
    }
}