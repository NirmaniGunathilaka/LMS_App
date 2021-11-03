import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import history from './history';
import { useParams } from 'react-router-dom';
import APIService from '../service/APIService'


class QuizComponent extends React.Component{
  
    constructor(props){
        super(props);
        const id=this.props.match.params.id;
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
            this.props.history.push('/Dashboard');
        });
    }

    render(){
        return(
            <div className="col-md-12" >
                <h2 align="center">Quiz Page</h2>
                <form >

                <div className="form-group">
                    <label >Question</label>
                    <input type="text" className="form-control" id="question" name="question"  placeholder="Enter question"
                        value={this.state.quiz.question} onChange={this.changeHandler}/>
                </div>

                <div className="form-group w-25">
                    <label >Option1</label>
                    <input type="text" className="form-control" id="option1" name="option1"   placeholder="Write option1" 
                        value={this.state.quiz.option1} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label >Option2</label>
                    <input type="text" className="form-control" id="option2" name="option2"   placeholder="Write option2" 
                        value={this.state.quiz.option2} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label >Option3</label>
                    <input type="text" className="form-control" id="option3" name="option3"   placeholder="Write option3" 
                        value={this.state.quiz.option3} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label >Option4</label>
                    <input type="text" className="form-control" id="option4" name="option4"   placeholder="Write option4" 
                        value={this.state.quiz.option4} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label >Correct Answer</label>
                    <input type="text" className="form-control" id="answer" name="answer"   placeholder="Write correct answer" 
                        value={this.state.quiz.answer} onChange={this.changeHandler}/>
                </div>
            </form>
            <button onClick={this.onCreateQuiz} className="btn btn-primary">Create</button>
            </div>
        )
    }
}

export default QuizComponent;
