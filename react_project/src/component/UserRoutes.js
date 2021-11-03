import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import history from "././history";
import VisionApp from './VisionApp';
import TeamApp from "./TeamApp";
import UserNav from "./UserNav";
import Homepage from "./Homepage";
import Quiz from "./Quiz";
import Profile from "./Profile";
import VideoApp from "./VideoApp";
import CourseDesc from "./CourseDesc";
import ShowQuiz from "./ShowQuiz";
import SdApp from './SdApp';


export default class UserRoutes extends Component {
    render() {
        return (
            <>
                <UserNav />
                <Switch>
                    <Route exact path="/User/" component={Homepage} />   
                    <Route path="/User/VideoApp" component={VideoApp} />
                    <Route path="/User/Desc" component={CourseDesc} />
                    <Route exact path="/User/ShowQuiz" component={ShowQuiz} />
                    <Route path="/User/Profile" component={Profile} />
                    <Route exact path="/User/VisionApp" component={VisionApp} />
                    <Route exact path="/User/TeamApp" component={TeamApp} />
                    <Route path="/User/sdapp" eaxct component={SdApp} />
                </Switch>
            </>
        )
    }
}