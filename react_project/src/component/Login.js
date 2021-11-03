import React, { Component } from "react";
import "../Css/LoginForm.css";
import {
  Button,
  Divider,
  FormControlLabel,
  TextField,
  InputLabel
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { createBrowserHistory } from "history";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonIcon from "@material-ui/icons/Person";
import RegisterForm from "./RegisterForm";
// import { render } from 'react-dom';
import history from "././history";
import APIService from '../service/APIService'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import img from '../images/Persistent_LMS_logo.jpeg';

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const formRef = React.useRef();
    const Click = () => {
    history.push("/RegisterForm");
  };

  const handleClick = (e) => {
    formRef.current.reportValidity();
    e.preventDefault();
    
    // alert("Submitted:\n" + email + "\n" + password);

    if((email==="" || password===""))
    {
      alert("Please fill the fields");
    }
    else
    {
      const login = { email, password };

      APIService.getUsersByEmail(login.email,login.password).then((res) => {
        console.log(res.data);
        if(res.data===""){
          alert("Login Credentials are wrong");
        }
        else if((res.data.usertype)=="admin"){
          history.push("/Admin");
          sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
        }
        else{
          history.push("/User");
          sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
        }
        
      });
    }

    
  };


  return(
      <div>
        <h1 align="center" style={{color:'#02706B'}}>Welcome to Persistent LMS Project</h1>
        <div align="center" className="icon_Class">
          <PersonIcon  style={{fontSize:35}}  className="Ltext"/>
          <label className="Ltext">
            Log In
          </label>
        </div>

        <div id="divleft">
           <img src={img} width="500px" alt=""></img>
        </div>
        <div id="divright">
            <form ref={formRef}>
              <div className="row m-2" style={{marginTop:'50px'}}>
                <div>
                    {" "}
                    <TextField
                      required
                      id="email"
                      type="text"
                      variant="filled"
                      label="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      inputProps={{style: {fontSize: 20}}} // font size of input text
                      InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                    />
                  </div>
                  <br></br>
                  <div>
                    {" "}
                    <TextField
                      required={true}
                      id="password"
                      className="p-5"
                      type="password"
                      variant="filled"
                      label="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                      inputProps={{style: {fontSize: 20}}} // font size of input text
                      InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                    />
                  </div>
                  <br></br>
                  <InputLabel
                    style={{ direction: "rtl" ,fontSize: 20,color:"blue"}}
                    id="forgotPassword"
                    value="Forget Password"
                  ><Link to="/ForgotPassword">Forget Password</Link></InputLabel><br></br>
                  <div align="center">
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                      raised="true"
                      size="medium">
                      <label style={{fontSize:'15px'}}>Log In</label>
                    </Button>{" "}
                  </div>
              </div>
            </form>
          <br></br>
          <Divider variant="middle" />
          <br></br>
          <div align="center">
            {" "}
            <Button
              variant="contained"
              color="primary"
              onClick={Click}
              raised="true"
            >
            <label style={{fontSize:'15px'}}> Create Account</label>
            </Button>{" "}
          </div>
      </div>
      </div>
  );
  
}
