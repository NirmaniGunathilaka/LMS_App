import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../Css/AdminNav.css';
import history from './history';
import VisionApp from './VisionApp';
import TeamApp from './TeamApp';
import APIService from "../service/APIService";


export default class AdminNav extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  getCourseData() {
    APIService.getCourses()
      .then((res) => {
        const data = res.data;
        console.log(data);

        this.setState({
          courses: data,
        });
        console.log(this.state.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    console.log(JSON.parse(sessionStorage.getItem("loggedUser")));
    if(JSON.parse(sessionStorage.getItem("loggedUser"))==="" ||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
    {
        history.push("/Login");
    }
    else{
      this.getCourseData();
    }
  }

  render(){
    return (
        <div>
          <div class="menu-bar">
          <ul>
            <li><Link to="/Admin/">HOME</Link></li>
            <li><Link to="/Admin/AddCourse">ADD COURSE</Link></li>
            <li>
              COURSES
              <div className="sub-menu-1">
                <ul>
                  {this.state.courses.map(function (course, i) {
                    return (
                      <li key={i}>
                        <Link
                          to="/Admin/Desc"
                          onClick={() =>
                            localStorage.setItem("desc", course.description)
                          }
                        >
                          {course.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
            QUIZES
              <div className="sub-menu-quizes">

              <ul>
                  {this.state.courses.map(function (course, i) {
                      console.log(course.course_id);
                    let video_url = "";
                    let videoUrlArray=[];
                    let id=course.course_id;
                    course.videos.map(function (video, j) {
                    //  console.log(video.url);
                      video_url = video.url;
                      videoUrlArray[j]=video_url;
                      console.log(videoUrlArray);
                    });
                    return (
                      <li key={i}>
                        <Link
                          to={`/Admin/Quiz:${id}`}
                        >
                          {course.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              NOTES

              <div className="sub-menu-notes">
                <ul>
                  {this.state.courses.map(function (course, i) {
                    let drive_link = "";
                   // console.log(course);
                    course.notes.map(function (note, j) {
                   //   console.log(note.drive_link);
                      drive_link = note.drive_link;
                    });
                    return (
                      <li key={i}>
                        <a href={drive_link} target="_blank">
                          {course.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              VIDEOS
              <div className="sub-menu-1">
                <ul>
                  {this.state.courses.map(function (course, i) {
                      
                    let video_url = "";
                    let videoUrlArray=[];
                    course.videos.map(function (video, j) {
                    //  console.log(video.url);
                      video_url = video.url;
                      videoUrlArray[j]=video_url;
                      console.log(videoUrlArray);
                    });
                    return (
                      <li key={i}>
                        <Link
                          to="/Admin/VideoAPP"
                          onClick={() => localStorage.setItem("url", JSON.stringify(videoUrlArray)
                      )}
                        >
                          {course.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>{" "}
            <li>ABOUT
            <div class="sub-menu-about">
              <ul>
                
                <li><Link to="/Admin/VisionApp">VISSION</Link></li>
                <li><Link to="/Admin/TeamApp">TEAM</Link></li>
              </ul>
            </div>
            </li>
            <li>PROFILE
            <div class="sub-menu-profile">
              <ul>
               
                <li><Link to="/Admin/Profile">VIEW PROFILE</Link></li>
                <li><Link to="/" onClick={()=>{sessionStorage.removeItem('loggedUser');}}>LOGOUT</Link></li>
              </ul>
            </div>
            </li>
          </ul>
          
        </div>
        
        </div>
        
      );
  }
}

