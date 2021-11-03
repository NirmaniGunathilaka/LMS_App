import React, { Component } from "react";
import "../Css/NavBar.css";
import history from "././history";


class CourseDesc extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(JSON.parse(sessionStorage.getItem("loggedUser"))==="")
    {
        history.push("/Login");
    }
  }

  render() {
    const referrer = localStorage.getItem("desc");
    console.log(referrer);

    return <div className="desc">{referrer}</div>;
  }
}

export default CourseDesc;
