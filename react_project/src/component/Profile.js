import React from 'react';
import APIService from '../service/APIService';
import {
  Button,
  TextField,
  InputLabel,
} from "@material-ui/core";
import history from "././history";

export default class Profile extends React.Component{


  sessionUser=JSON.parse(sessionStorage.getItem("loggedUser"));

  constructor(props)
  {
    super(props);
    this.state={
      disable:true,
      user:{},
      address:{}
    };
  }

  componentDidMount()
  {

    console.log("hii"+sessionStorage.getItem("loggedUser"));
    if(JSON.parse(sessionStorage.getItem("loggedUser"))===""||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
    {
        history.push("/Login");
    }
    else{
        APIService.getUsersByEmailForProfile(this.sessionUser.email)
        .then(response=>{
            this.setState({
                user:response.data.user,
                address:response.data.address
            });
            console.log(this.state.user);
        });
    }
  }

  userChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        user: {
            ...this.state.user,
            [name]: value
        }
    });
  }

  addressChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        address: {
            ...this.state.address,
            [name]: value
        }
    });
  }

  editHandler=()=>{
    this.setState({disable:!this.state.disable})
  }


  handleSubmit = (event) => {
    event.preventDefault();
    // alert(`${this.state.user.name}  Registered Successfully !!!!`)
    console.log(this.state.user);

    let userAddress= {
        user:
        {
            user_id:this.state.user.user_id,
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
            gender: this.state.user.gender,
            contactno:this.state.user.contactno,
            usertype:this.state.user.usertype
        },
        address: 
        {
            address_id:this.state.address.address_id,
            house_no: this.state.address.house_no,
            street: this.state.address.street,
            city: this.state.address.city,
            pincode: this.state.address.pincode,
            state: this.state.address.state,
            country: this.state.address.country,
        }
        
    };

    APIService.createUser(userAddress).then(res=>{
        console.log(res);
        if((res.data.usertype)=="admin"){
            history.push("/Admin");
            sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
          }
          else{
            history.push("/User");
            sessionStorage.setItem("loggedUser",JSON.stringify(res.data));
          }
    });
  }

  render() {
    return (
        <div align="center">
            <h1 align="center" style={{color:'#02706B'}}>User Profile</h1>
            
            <div className="row" style={{marginTop:'20px',marginLeft:'150px',marginRight:'150px',marginBottom:'50px'}}>
                 <form>
                   
                    <div >
                        {" "}
                        <TextField
                            type="text"
                            variant="filled"
                            label="Name"
                            placeholder="Enter Name"
                            value={this.state.user.name || " "} name="name" onChange={this.userChangeHandler}
                            required 
                            disabled={this.state.disable}
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
                            value={this.state.user.email || " "} name="email" onChange={this.userChangeHandler}
                            required 
                            disabled={this.state.disable}
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
                            value={this.state.user.contactno || " "} name="contact_no" onChange={this.userChangeHandler}
                            required 
                            disabled={this.state.disable}
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
                            label="House Number"
                            value={this.state.address.house_no || " "} name="houseno" 
                            onChange={this.addressChangeHandler} placeholder="House No..." 
                            required
                            disabled={this.state.disable}
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
                            value={this.state.address.street || " "} name="street" onChange={this.addressChangeHandler}
                            placeholder="Address..." 
                            required
                            fullWidth
                            disabled={this.state.disable}
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
                            value={this.state.address.city || " "} name="city" onChange={this.addressChangeHandler} 
                            placeholder="City..." required
                            fullWidth
                            disabled={this.state.disable}
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
                            value={this.state.address.pincode || " "} name="pincode" onChange={this.addressChangeHandler} 
                            placeholder="PinCode..." required
                            disabled={this.state.disable}
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
                            onChange={this.addressChangeHandler} name="state" value={this.state.address.state || " "}
                            placeholder="State..." required
                            disabled={this.state.disable}
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
                            value={this.state.address.country || " "} onChange={this.addressChangeHandler} 
                            name="country" placeholder="Country..." required
                            fullWidth
                            disabled={this.state.disable}
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
                        disabled={!this.state.disable}
                        onClick={this.editHandler}
                        raised="true"
                        >
                        <label style={{fontSize:'15px'}}> Edit Profile</label>
                        </Button>{" "}
                        {" "}
                        <Button
                        variant="contained"
                        color="primary"
                        disabled={this.state.disable}
                        onClick={this.handleSubmit}
                        raised="true"
                        >
                        <label style={{fontSize:'15px'}}> Submit Edit</label>
                        </Button>{" "}
                    </div>
                </form>
            </div>
        </div>

    )
}
 }
