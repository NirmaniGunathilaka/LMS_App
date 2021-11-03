import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "././Login";
import RegisterForm from "././RegisterForm";
import history from "././history";
import ForgotPassword from "./ForgotPassword";
import NavRoutes from "./NavRoutes";
import UserRoutes from "./UserRoutes";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Login" component={Login} />
                    <Route path="/RegisterForm" component={RegisterForm} />
                    <Route path="/ForgotPassword" component={ForgotPassword} />
                    <Route path="/Admin" component={NavRoutes} />
                    <Route path="/User" eaxct component={UserRoutes} />

                </Switch>
            </Router>
        )
    }
}
