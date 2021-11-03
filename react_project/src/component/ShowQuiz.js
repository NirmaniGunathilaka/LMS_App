import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { useParams } from 'react-router-dom';
import APIService from '../service/APIService';

import { Container, Paper } from "@mui/material";
import {
    Button,
    Divider,
    FormControlLabel,
    TextField,
  } from "@material-ui/core";

export default class ShowQuiz extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            // id:(props.match.params.id).toString().substring(1),
            // id:localStorage.getItem("id"),
            quiz:[],
            selection:[]
        };
    }

    componentDidMount() {
        // console.log((this.props.match.params.id).toString().substring(1));
        console.log("hii"+sessionStorage.getItem("loggedUser"));
        if(JSON.parse(sessionStorage.getItem("loggedUser"))===""||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
        {
            history.push("/Login");
        }
        else{
            console.log(JSON.parse(localStorage.getItem("cid")));

            let cid=JSON.parse(localStorage.getItem("cid"));
            APIService.getQuiz(cid)
                .then(response => {
                    let tmpArray = [];
                    for (var i = 0; i < response.data.length; i++) {
                        tmpArray[i]=(response.data[i]);
                    }
                    this.setState({
                        quiz: tmpArray
                    })
                    
                    console.log(this.state.quiz);
                });
            
        }
        

    }

    onRadioHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        this.setState({
            selection:[
                ...this.state.selection,
                {[name]:value}
        ]
        });
    }

    submitQuizHandler= ()=> {
        // Need to loop over inputs and get values for all of them.
            // this.state.selection.map( function(item, i) {
            //   console.log(item.i);
            // }.bind(this))
            console.log(this.state.selection);
            let score=0;
            for(var i=0;i<this.state.selection.length;i++)
            {
                var answer=(Object.values(this.state.quiz[i])[6])
                var selectedValue=(Object.values(this.state.selection[i])[0]);
                console.log(answer+" "+selectedValue);
                if(answer===selectedValue)
                {
                    score=score+1;
                }
            }
            console.log(score);
            localStorage.setItem("score",JSON.stringify(score));
            history.push("/User/sdapp");
      }


    render(){
        return(
            <Container>
                <Paper elevation={3} style={{ padding: "50px 20px", width: 600, margin: "20px auto" }}>
                <h2 align="center" style={{color:'#02706B'}}>Show Quiz</h2>
                <div>
                {
                    // Itterates over all inputs in the current state
                    this.state.quiz.map((item, i) => (
                        // <Input key={i} id={'input-' + i} ref={'input-' + i} type={item.type} placeholder={item.placeholder} />

                        <div className="col-md-12" >
                            <h4 >
                                {'Q'+(i+1)+'  '+item.question}
                            </h4>

                            <div className="form-check">
                                <input key={i} className="form-check-input" onChange={this.onRadioHandler} ref={'input-' + i} type="radio" name={'input-' + i} id={'input-' + i} value={item.option1}/>
                                <label className="form-check-label">
                                    {item.option1}
                                </label>
                            </div>
                            <div className="form-check">
                                <input key={i} className="form-check-input" onChange={this.onRadioHandler} ref={'input-' + i} type="radio" name={'input-' + i} id={'input-' + i} value={item.option2}/>
                                <label className="form-check-label" >
                                    {item.option2}
                                </label>
                            </div>
                            <div className="form-check">
                                <input key={i} className="form-check-input" onChange={this.onRadioHandler} ref={'input-' + i} type="radio" name={'input-' + i} id={'input-' + i} value={item.option3}/>
                                <label className="form-check-label" >
                                    {item.option3}  
                                </label>
                            </div>
                            <div className="form-check">
                                <input key={i} className="form-check-input" onChange={this.onRadioHandler} ref={'input-' + i} type="radio" name={'input-' + i} id={'input-' + i} value={item.option4}/>
                                <label className="form-check-label">
                                    {item.option4}
                                </label>
                            </div>
                        </div>
                    ))
                }
                </div>
                <br /><br />
                <div align="center">
                    {" \n"}
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submitQuizHandler} 
                    raised="true"
                    size="medium"
                    >
                    <label style={{fontSize:'15px'}}>Submit</label>
                    </Button>{" "}
                </div>
                </Paper>
        </Container>
        );
    }
}
