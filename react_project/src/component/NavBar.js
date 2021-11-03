import React, { Component } from "react";
import "../Css/NavBar.css";
import APIService from "../service/APIService";
import { Link } from "react-router-dom";

class NavBar extends Component {
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
    this.getCourseData();
  }

  render() {
    return (
      <div className="head">
        <div className="menu-bar">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">COURSES</a>
              <div className="sub-menu-1">
                <ul>
                  {this.state.courses.map(function (course, i) {
                    return (
                      <li key={i}>
                        <Link
                          to="/Desc"
                          onClick={() =>
                            localStorage.setItem("desc", course.description)
                          }
                          target="_blank"
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
              <a href="#">NOTES</a>

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
              <a href="#">VIDEOS</a>
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
                          to="/VideoAPP"
                          onClick={() => localStorage.setItem("url", JSON.stringify(videoUrlArray)
                      )}
                          target="_blank"
                        >
                          {course.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>{" "}
            <li>
              <a href="#">QUIZES</a>
              <div className="sub-menu-quizes">
                <ul>
                  <li>
                    <a href="#">JAVA</a>
                  </li>
                  <li>
                    <a href="#">PYTHON</a>
                  </li>
                  <li>
                    <a href="#">C</a>
                  </li>
                  <li>
                    <a href="#">C++</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">ABOUT</a>
              <div className="sub-menu-about">
                <ul>
                  <li>
                    <a href="/VisionApp">VISSION</a>
                  </li>
                  <li>
                    <a href="/TeamApp">TEAM</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">PROFILE</a>
              <div className="sub-menu-profile">
                <ul>
                  <li>
                    <a href="#">HELP</a>
                  </li>
                  <li>
                    <a href="#">SETTINGS</a>
                  </li>
                  <li>
                    <a href="#">LOGOUT</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
