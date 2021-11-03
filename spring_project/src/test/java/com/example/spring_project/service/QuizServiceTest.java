package com.example.spring_project.service;

import com.example.spring_project.bean.Quiz;
import com.example.spring_project.repository.QuizRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class QuizServiceTest {
    @Mock
    private QuizRepository quizRepository;

    private QuizService quizService;
    Quiz quiz=new Quiz(10,
            "Who developed the Python language?",
            "Wick van Rossum",
            "Guido van Rossum",
            "Zim Den",
            "Niene Stom",
            "Guido van Rossum",
            16);

    @Test
    void insertQuiz() {
        quizService.insertQuiz(quiz);
        verify(quizRepository).save(quiz);

    }
    @BeforeEach
    void setUp() {
        this.quizService = new QuizService(this.quizRepository);
    }

    @Test
    void getAllQuiz() {
        quizService.getAllQuiz();
        verify(quizRepository).findAll();
    }

    @Test
    void findByCourse_Id() {
        quizService.findByCourse_Id(16);
        verify(quizRepository).findByCourse_Id(16);
    }
}