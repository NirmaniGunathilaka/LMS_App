import React, { Component } from "react";
import "../Css/NavBar.css";


class CourseDesc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const referrer = localStorage.getItem("desc");
    console.log(referrer);

    return <div className="desc">{referrer}</div>;
  }
}

export default CourseDesc;
