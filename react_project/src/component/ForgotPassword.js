import React from 'react';
import "../Css/LoginForm.css";
import {
  Button,
  Divider,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import {  Router, Route, Switch, Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import history from "././history";
import APIService from '../service/APIService'

import img from '../images/Persistent_LMS_logo.jpeg';
export default class ForgotPassword extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:'',
      cnfpassword:''
    }
  }


  changeHandler = e => {

    const name = e.target.name;

    const value = e.target.value;
    this.setState({
            [name]: value

    });

}

  handleClick = (e) => {
    e.preventDefault();
      let email=this.state.email;
      let password=this.state.password;
      console.log(email+" "+password);
      if((email==="" || password==="" || this.state.cnfpassword===""))
      {
        alert("Please fill the fields");
      }
      else if(password === this.state.cnfpassword)
      {
        APIService.changeUserPassword(email,password).then((res) => {
          console.log(res.data);
          if(res.data!=null)
          {
            history.push("/");
          }
          else{
            alert("Not changed password");
          }
          
        });
      }
      else
      {
        alert("Password and Confirm Password doesn't match.");
      }
    // alert("Submitted:\n" + email + "\n" + password);

    
  };

  render(){
    return (
      <div>
        <h1 align="center" style={{color:'#02706B'}}>Welcome to Persistent LMS Project</h1>
        <div align="center" className="icon_Class">
          <PersonIcon  style={{fontSize:35}}  className="Ltext"/>
          <label className="Ltext">
            Forgot Password
          </label>
        </div>

        <div id="divleft">
           <img src={img} width="500px" alt=""></img>
        </div>
        <div id="divright">
            <form>
              <div className="row m-2" style={{marginTop:'50px'}}>
                <div>
                    {" "}
                    <TextField
                      required
                      id="email"
                      type="text"
                      variant="filled"
                      label="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
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
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
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
                      id="cnfpassword"
                      className="p-5"
                      type="password"
                      variant="filled"
                      label="Confirm password"
                      name="cnfpassword"
                      value={this.state.cnfpassword}
                      onChange={this.changeHandler}
                      fullWidth
                      inputProps={{style: {fontSize: 20}}} // font size of input text
                      InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                    />
                  </div>
                  <br></br>
                  <div align="center">
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleClick}
                      raised="true"
                      size="medium"
                    >
                      <label style={{fontSize:'15px'}}>Change Password</label>
                    </Button>{" "}
                  </div>
              </div>
            </form>
          <br></br>
        </div>
      </div>
    );
  }

}
