import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import history from "././history";
import VisionApp from './VisionApp';
import TeamApp from "./TeamApp";
import AdminNav from "./AdminNav";
import Homepage from "./Homepage";
import AddCourse from "./AddCourse";
import Quiz from "./Quiz";
import Profile from "./Profile";
import VideoApp from "./VideoApp";
import CourseDesc from "./CourseDesc";

export default class NavRoutes extends Component {
    render() {
        return (
            <>
                <AdminNav />
                <Switch>
                    <Route exact path="/Admin/" component={Homepage} />   
                    <Route path="/Admin/AddCourse" component={AddCourse} />
                    <Route path="/Admin/VideoApp" component={VideoApp} />
                    <Route path="/Admin/Desc" component={CourseDesc} />
                    <Route path="/Admin/Quiz:id" component={Quiz} />
                    <Route path="/Admin/Profile" component={Profile} />
                    <Route exact path="/Admin/VisionApp" component={VisionApp} />
                    <Route exact path="/Admin/TeamApp" component={TeamApp} />
                </Switch>
            </>
        )
    }
}