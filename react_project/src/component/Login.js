import React, { Component } from "react";
import "../Css/LoginForm.css";
import {
  Button,
  Divider,
  FormControlLabel,
  TextField,
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

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const Click = () => {
    history.push("/RegisterForm");
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("Submitted:\n" + email + "\n" + password);

    const login = { email, password };

    APIService.getUsersByEmail(login.email).then((res) => {
      console.log(res.data);
      sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
      console.log(login.email);
      history.push("/Dashboard");
    });
  };

  
    return (
      <div align="center">
        <div className="icon">
          <div className="icon_Class">
            <PersonIcon fontSize="large" />
          </div>
          <div align="center" className="text">
            Log In
          </div>
        </div>

        <div className="row m-2">
          <div>
            {" "}
            <TextField
              id="email"
              className="p-2"
              type="text"
              variant="outlined"
              label="Enter email"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
              full
              width
            />
          </div>
          <br></br>
          <div>
            {" "}
            <TextField
              id="password"
              className="p-2"
              type="text"
              variant="outlined"
              label="Enter password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
              full
              width
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="Small" />}
                checkedIcon={<CheckBoxIcon fontSize="Small" />}
                name="Checked"
              />
            }
          />
          <label>Remember Me</label>
          <div>
            {" "}
            <Button
              variant="Contained"
              colour="primary"
              onClick={handleClick}
              fullwidth
            >
              Log In
            </Button>{" "}
          </div>
        </div>
        <Divider variant="middle" />
        <div>
          {" "}
          <Button
            variant="Contained"
            colour="primary"
            onClick={Click}
            fullwidth
          >
            Create Account
          </Button>{" "}
        </div>
      </div>
    );
  
}
