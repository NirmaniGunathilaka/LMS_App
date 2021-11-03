import React from 'react'
import '../Css/Homepage.css';
import img from '../images/Elearning.jpg';
import logo from '../images/Persistent_LMS_logo.jpeg';
import history from "././history";

export default class Homepage extends React.Component{

    componentDidMount(){
        console.log("hii"+sessionStorage.getItem("loggedUser"));
        if(JSON.parse(sessionStorage.getItem("loggedUser"))===""||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
        {
            history.push("/Login");
        }
    }

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div align="center" style={{marginTop:'10px'}}>
             <div className="Hh2">
             <h2 style={{ fontSize:'50px', color:'black',}} >Welcome to Persistent LMS</h2>
                 <p >
                     You Only Have to Know One Thing <br></br>
                             You can Learn Anything <br></br>
                 </p>
                 
                 <img src={img} width='700' height='350'  alt=''/>
                 <p >
                 
                 We believe learning is a source of our progress.No matter who we are or
                 where we are learning empowers us to change and grow and redefine what's possible <br></br>
                 That's why access to the best learning is a right, not a privilage.<br></br> <br></br>
                 And that's why Persistent LMS is here so that any one can transform their life through learning
                 </p>
             </div>
             </div> 

         )
    }
}
