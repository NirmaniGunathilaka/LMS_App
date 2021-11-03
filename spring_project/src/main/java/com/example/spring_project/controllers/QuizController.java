package com.example.spring_project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_project.bean.Quiz;
import com.example.spring_project.service.QuizService;

@CrossOrigin
@RestController
@RequestMapping("/quiz")
public class QuizController {

	@Autowired
	private QuizService quizService;
	
	
	@PostMapping("/insertQuiz/{course_id}")
	public String insertQuiz(@PathVariable int course_id,@RequestBody Quiz quiz)
	{
		quiz.setCourseId(course_id);
		quizService.insertQuiz(quiz);
		return "Quiz Inserted Successfull";
	}
	
	@GetMapping
	public List<Quiz> getAllQuiz()
	{
		return quizService.getAllQuiz();
	}
	
	@GetMapping("/getQuiz/{course_id}")
	public List<Quiz> findByCourse_Id(@PathVariable int course_id)
	{
		return quizService.findByCourse_Id(course_id);
	}
	
	
}
