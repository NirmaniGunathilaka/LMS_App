import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
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

class QuizComponent extends React.Component{
    constructor(props){
        super(props);
        let id=(this.props.match.params.id).toString().substring(1);
        console.log(id);
        this.state={
            quiz:{
                course_id:id,
                question:'',
                option1:'',
                option2:'',
                option3:'',
                option4:'',
                answer:''
            }
        };
    }
    componentDidMount()
  {

    console.log("hii"+sessionStorage.getItem("loggedUser"));
    if(JSON.parse(sessionStorage.getItem("loggedUser"))===""||JSON.parse(sessionStorage.getItem("loggedUser"))===null)
    {
        history.push("/Login");
    }
  }

    changeHandler=e=>{
        const name=e.target.name;
        const value=e.target.value;

        this.setState({
            quiz:{
                ...this.state.quiz,
                [name]:value
            }
        });
    }


    onCreateQuiz=()=>{
        console.log(this.state.quiz);
        if(this.state.quiz.question===""||
            this.state.quiz.option1===""||
            this.state.quiz.option2===""||
            this.state.quiz.option3===""||
            this.state.quiz.option4===""||
            this.state.quiz.answer==="")
        {
            alert("Fields are empty..Fill all fields!!"); 
        }
        else{
            let quiz={
                "question":this.state.quiz.question,
                "option1":this.state.quiz.option1,
                "option2":this.state.quiz.option2,
                "option3":this.state.quiz.option3,
                "option4":this.state.quiz.option4,
                "answer":this.state.quiz.answer
            };
            APIService.createQuiz((this.props.match.params.id).substring(1),quiz).then(res=>{
                console.log(res);
                if(res.data==="")
                {
                    alert("Something went wrong..Try again later!!");
                }
                else{
                    this.props.history.push('/Admin/');
                }
                
            });
        }
        
    }

    render(){
        return(
            <Container>
                <Paper elevation={3} style={{ padding: "50px 20px", width: 600, margin: "20px auto" }}>      
                <h2 align="center" style={{ color: '#02706B' }}>Quiz Page</h2>
                    <form >
                        <TextField
                            id="outlined-basic"
                            required
                            label="Question"
                            variant="outlined"
                            fullWidth
                            name="question"  
                            placeholder="Enter question"
                            value={this.state.quiz.question} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            required
                            label="Option1"
                            variant="outlined"
                            fullWidth
                            name="option1"   
                            placeholder="Write option1" 
                            value={this.state.quiz.option1} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            required
                            label="Option2"
                            variant="outlined"
                            fullWidth
                            name="option2"   
                            placeholder="Write option2" 
                            value={this.state.quiz.option2} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            required
                            label="Option3"
                            variant="outlined"
                            fullWidth
                            name="option3"   
                            placeholder="Write option3" 
                            value={this.state.quiz.option3} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            required
                            label="Option4"
                            variant="outlined"
                            fullWidth
                            name="option4"   
                            placeholder="Write option4" 
                            value={this.state.quiz.option4} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            required
                            label="Correct Answer"
                            variant="outlined"
                            fullWidth
                            name="answer"   
                            placeholder="Write correct answer" 
                            value={this.state.quiz.answer} 
                            onChange={this.changeHandler}
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                        />
                        <br /><br />
                        <div align="center">
                        {" \n"}
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={this.onCreateQuiz} 
                            raised="true"
                            size="medium"
                            >
                            <label style={{fontSize:'15px'}}>Add</label>
                            </Button>{" "}
                        </div>
                </form>
            </Paper>
        </Container>
        )
    }
}

export default QuizComponent;
