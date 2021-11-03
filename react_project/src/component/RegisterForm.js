import React, { Component } from 'react'
import '../Css/RegisterForm.css'
import APIService from '../service/APIService'
import history from './history'
import axios from 'axios'
import {
    Button,
    TextField,
    InputLabel,
  } from "@material-ui/core";
  import { Select,MenuItem ,FormControl} from '@mui/material';
  import Checkbox from "@material-ui/core/Checkbox";
  import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
  import { createBrowserHistory } from "history";
  import CheckBoxIcon from "@material-ui/icons/CheckBox";
  import PersonIcon from "@material-ui/icons/Person";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                gender: "",
                contact_no:"",
                houseno: "",
                street: "",
                city: "",
                pincode: "",
                state: "",
                country: ""
                
            }


        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeHandler = e => {

        const name = e.target.name;

        const value = e.target.value;
        this.setState({

            user: {
                ...this.state.user,
                [name]: value
            }

        });

    }

    handleSubmit = (event) => {
        // alert(`${this.state.user.name}  Registered Successfully !!!!`)
        event.preventDefault();
        console.log(this.state.user);
        if(this.state.user.name==="" ||
            this.state.user.email==="" ||
            this.state.user.password==="" ||
            this.state.user.gender==="" ||
            this.state.user.contact_no==="" ||
            this.state.user.houseno==="" ||
            this.state.user.street==="" ||
            this.state.user.city==="" ||
            this.state.user.pincode==="" ||
            this.state.user.state==="" ||
            this.state.user.country==="" )
        {
            alert("Fields are empty..Fill all fields!!");
        }
        else{
            let userAddress= {
                user:
                {
                    name: this.state.user.name,
                    email: this.state.user.email,
                    password: this.state.user.password,
                    gender: this.state.user.gender,
                    contactno:this.state.user.contact_no,
                    usertype:"user"
                },
                address: 
                {
                    house_no: this.state.user.houseno,
                    street: this.state.user.street,
                    city: this.state.user.city,
                    pincode: this.state.user.pincode,
                    state: this.state.user.state,
                    country: this.state.user.country,
                }
                
            };
    
             
            
            APIService.createUser(userAddress).then(res=>{
                console.log(res);
                if(res.data==="")
                {
                    alert("Something went wrong..Try again later!!");
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
            this.setState({
                user: {
                    name: "",
                    email: "",
                    password: '',
                    contact_no:' ',
                    houseno: "",
                    street: "",
                    city: "",
                    pincode: "",
                    state: "",
                    country: "",
                    gender: ""
                }
    
            })
    
        }
        
        
        

    }




    render() {
        return (
            <div align="center">
                <h1 align="center" style={{color:'#02706B'}}>Welcome to Persistent LMS Project</h1>
                <div align="center" className="icon_Class">
                    <PersonIcon  style={{fontSize:35}}  className="Ltext"/>
                    <label className="Ltext">
                        Create Account
                    </label>
                </div>
                <div className="row" style={{marginTop:'20px',marginLeft:'150px',marginRight:'150px',marginBottom:'50px'}}>
                     <form>

                    
                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="Name"
                                placeholder="Enter Name"
                                value={this.state.user.name} name="name" onChange={this.changeHandler}
                                required 
                                fullWidth
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="Email"
                                placeholder="Enter email"
                                value={this.state.user.email} name="email" onChange={this.changeHandler}
                                required 
                                fullWidth
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="password"
                                variant="filled"
                                label="Password"
                                placeholder="Enter Password"
                                value={this.state.user.password} name="password" onChange={this.changeHandler}
                                required 
                                fullWidth
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="Contact Number"
                                placeholder="Enter Contact Number"
                                value={this.state.user.contact_no} name="contact_no" onChange={this.changeHandler}
                                required 
                                fullWidth
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                            />
                        </div>
                        <br></br>

                        
                        <div>
                            <select className="Rselect" onChange={this.changeHandler} name="gender" value={this.state.user.gender} defaultValue="Select Gender">

                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                             </select><br />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="House Number"
                                value={this.state.user.houseno} name="houseno" 
                                onChange={this.changeHandler} placeholder="House No..." 
                                required
                                fullWidth
                                inputProps={{style: {fontSize: 20}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                                
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="Address"
                                value={this.state.user.street} name="street" onChange={this.changeHandler}
                                placeholder="Address..." 
                                required
                                fullWidth
                                inputProps={{style: {fontSize: 20}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                                
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="City"
                                value={this.state.user.city} name="city" onChange={this.changeHandler} 
                                placeholder="City..." required
                                fullWidth
                                inputProps={{style: {fontSize: 20}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                                
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="PinCode"
                                value={this.state.user.pincode} name="pincode" onChange={this.changeHandler} 
                                placeholder="PinCode..." required
                                fullWidth
                                inputProps={{style: {fontSize: 20}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                                
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="State"
                                onChange={this.changeHandler} name="state" value={this.state.user.state}
                                placeholder="State..." required
                                fullWidth
                                inputProps={{style: {fontSize: 20}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                                
                            />
                        </div>
                        <br></br>

                        <div >
                            {" "}
                            <TextField
                                type="text"
                                variant="filled"
                                label="Country"
                                value={this.state.user.country} onChange={this.changeHandler} 
                                name="country" placeholder="Country..." required
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
                            onClick={this.handleSubmit}
                            raised="true"
                            >
                            <label style={{fontSize:'15px'}}> Create Account</label>
                            </Button>{" "}
                        </div>

                   


                        {/* <label>Name :</label> <input className="Rinput" type="text" value={this.state.user.name} name="name" onChange={this.changeHandler} placeholder="Name..." required /><br />
                        <label>Email Id  :</label> <input className="Rinput" type="text" value={this.state.user.email} name="email" onChange={this.changeHandler} placeholder="Email Id..." required /><br />
                        <label>Password  :</label> <input className="Rinput" type="password" value={this.state.user.password} name="password" onChange={this.changeHandler} placeholder="Password..." required /><br />
                        <label>Contact Number  :</label> <input className="Rinput" type="text" value={this.state.user.contact_no} name="contact_no" onChange={this.changeHandler} placeholder="Contact No..." required /><br />

                        <label>Gender  :</label> <select className="Rselect" onChange={this.changeHandler} name="gender" defaultValue="Select Gender">

                            <option defaultValue>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                        <label>House Number :</label> <input className="Rinput" type="text" value={this.state.user.houseno} name="houseno" onChange={this.changeHandler} placeholder="House No..." required /><br />
                        <label>Street:</label> <input className="Rinput" type="text" value={this.state.user.street} name="street" onChange={this.changeHandler} placeholder="Address..." required /><br />
                        <label>City  :</label> <input className="Rinput" type="text" value={this.state.user.city} name="city" onChange={this.changeHandler} placeholder="City..." required /><br />
                        <label>PinCode :</label> <input className="Rinput" type="text" value={this.state.user.pincode} name="pincode" onChange={this.changeHandler} placeholder="PinCode..." required /><br />

                        <label>State :</label> <select className="Rselect" onChange={this.changeHandler} name="state" value={this.state.user.state} defaultValue="Select State">

                            <option defaultValue>Select State</option>
                            <option value="andhre pradesh">Andhra Pradesh</option>
                            <option value="telangana">Telangana</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="punjab">Punjab</option>
                            <option value="uttar pradesh">Uttar Pradesh</option>
                            <option value="kerala">Kerala</option>
                            <option value="tamil nadu">Tamil Nadu</option>
                            <option value="delhi">Delhi</option>
                        </select><br />
                        <label>Country :</label> <select className="Rselect" onChange={this.changeHandler} name="country" defaultValue="Select Country">

                            <option defaultValue>Select Country</option>
                            <option value="india">India</option>
                            <option value="australia">Australia</option>
                            <option value="brazil">Brazil</option>
                            <option value="united kingdom">United Kingdom</option>
                        </select><br />

                        <input className="Rsubmit" type="submit" value="Submit" />
                        <br></br> */}

                    </form>
                </div>
            </div>

        )
    }
}

export default Form