import React, { Component } from 'react'
import '../Css/RegisterForm.css'
import APIService from '../service/APIService'
import history from './history'
import axios from 'axios'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                houseno: "",
                street: "",
                city: "",
                pincode: "",
                state: "",
                country: "",
                gender: ""
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
        alert(`${this.state.user.name}  Registered Successfully !!!!`)
        console.log(this.state.user);

        let user= this.state.user;
        
        APIService.createUser(user).then(res=>{
            console.log(res);
           this.props.history.push('/Dashboard');
        });

        this.setState({
            user: {
                name: "",
                email: "",
                password: '',
                houseno: "",
                street: "",
                city: "",
                pincode: "",
                state: "",
                country: "",
                gender: ""
            }

        })
        event.preventDefault()

    }




    render() {
        return (
            <div align="center">

                <form onSubmit={this.handleSubmit}>
                    <h1>   User Registration</h1>


                    <label>Name :</label> <input type="text" value={this.state.user.name} name="name" onChange={this.changeHandler} placeholder="Name..." required /><br />
                    <label>Email Id  :</label> <input type="text" value={this.state.user.email} name="email" onChange={this.changeHandler} placeholder="Email Id..." required /><br />
                    <label>Password  :</label> <input type="password" value={this.state.user.password} name="password" onChange={this.changeHandler} placeholder="Password..." required /><br />

                    <label>Gender  :</label> <select onChange={this.changeHandler} name="gender" defaultValue="Select Gender">

                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>House Number :</label> <input type="text" value={this.state.user.houseno} name="houseno" onChange={this.changeHandler} placeholder="House No..." required /><br />
                    <label>Street:</label> <input type="text" value={this.state.user.street} name="street" onChange={this.changeHandler} placeholder="Address..." required /><br />
                    <label>City  :</label> <input type="text" value={this.state.user.city} name="city" onChange={this.changeHandler} placeholder="City..." required /><br />
                    <label>PinCode :</label> <input type="text" value={this.state.user.pincode} name="pincode" onChange={this.changeHandler} placeholder="PinCode..." required /><br />

                    <label>State :</label> <select onChange={this.changeHandler} name="state" value={this.state.user.state} defaultValue="Select State">

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
                    <label>Country :</label> <select onChange={this.changeHandler} name="country" defaultValue="Select Country">

                        <option defaultValue>Select Country</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="brazil">Brazil</option>
                        <option value="united kingdom">United Kingdom</option>
                    </select><br />

                    <input type="submit" value="Submit" />

                </form>

            </div>

        )
    }
}

export default Form