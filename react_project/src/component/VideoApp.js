import { Component } from "react";
import "../Css/VideoApp.css";
import ReactPlayer from "react-player";

class VideoApp extends Component {
  constructor(props) {
    super(props);
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
