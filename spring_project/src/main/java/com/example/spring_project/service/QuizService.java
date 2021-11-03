package com.example.spring_project.service;

import com.example.spring_project.bean.Quiz;
import com.example.spring_project.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {
	
	@Autowired
	QuizRepository quizRepository;
	
	public String insertQuiz(Quiz quiz)
	{
		
		quizRepository.save(quiz);
		return "Quiz Inserted Successfull";
	}
	public QuizService(QuizRepository repo) {  this.quizRepository = repo; }
	public List<Quiz> getAllQuiz()
	{
		return quizRepository.findAll();
	}
	
	public List<Quiz> findByCourse_Id(int course_id)
	{
		return quizRepository.findByCourse_Id(course_id);
	}
	
}
