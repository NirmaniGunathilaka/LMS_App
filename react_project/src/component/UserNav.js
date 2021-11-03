import React, { Component } from "react";
import '../Css/Homepage.css';
import APIService from "../service/APIService";
import { Link } from "react-router-dom";
import history from "././history";

class UserNav extends Component {
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
    if(JSON.parse(sessionStorage.getItem("loggedUser"))==="")
    {
        history.push("/Login");
    }
    else{
      this.getCourseData();
    }
  }

  render() {
    return (
      <div className="head">
        <div className="menu-bar">
          <ul>
            <li>
              <Link to="/User/">HOME</Link>
            </li>
            <li>
              COURSES
              <div className="sub-menu-1">
                <ul>
                  {this.state.courses.map(function (course, i) {
                    return (
                      <li key={i}>
                        <Link
                          to="/User/Desc"
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
                          to="/User/VideoAPP"
                          onClick={() => {
                            window.location.reload(); 
                            localStorage.setItem("url", JSON.stringify(videoUrlArray))
                          }
                        }
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
                  {this.state.courses.map(function (course, i) {
                      console.log(course.course_id);
                      let cid=course.course_id;
                      return (
                      <li key={i}>
                        <Link
                          to="/User/ShowQuiz"
                          onClick={() => localStorage.setItem("cid", JSON.stringify(cid)
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
            <li>
                ABOUT
                <div class="sub-menu-about">
                <ul>
                    
                    <li><Link to="/User/VisionApp">VISSION</Link></li>
                    <li><Link to="/User/TeamApp">TEAM</Link></li>
                </ul>
                </div>
            </li>
            <li>
            PROFILE
            <div class="sub-menu-profile">
              <ul>
                <li><Link to="/User/Profile">VIEW PROFILE</Link></li>
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

export default UserNav;
