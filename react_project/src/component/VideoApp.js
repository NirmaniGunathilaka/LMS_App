import { Component } from "react";
import "../Css/VideoApp.css";
import ReactPlayer from "react-player";
import history from "././history";


class VideoApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount()
  {

    console.log("hii"+sessionStorage.getItem("loggedUser"));
    if(JSON.parse(sessionStorage.getItem("loggedUser"))===""||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
    {
        history.push("/Login");
    }
  }

  videoList() {
    var videoUrlArray = [];

    videoUrlArray = JSON.parse(localStorage.getItem("url"));
    return videoUrlArray.map((data) => {
      return (
        <div className="video">
          <ReactPlayer width="360px" height="220px" controls url={data} />
        </div>
      );
    });
  }

  render() {
    return <div>{this.videoList()}</div>;
  }
}

export default VideoApp;
