package com.example.spring_project.repository;

import com.example.spring_project.bean.Quiz;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class QuizRepositoryTest {
    @Autowired
    private QuizRepository quizRepository;

    @Test
    void findByCourse_Id() {
        Quiz quiz=new Quiz(10,
                "Who developed the Python language?",
                "Wick van Rossum",
                "Guido van Rossum",
                "Zim Den",
                "Niene Stom",
                "Guido van Rossum",
                16);
        quizRepository.save(quiz);
        Quiz exceptedResult = quiz;
        List<Quiz> quizList = quizRepository.findByCourse_Id(16);
        for(int i=0;i<quizList.size();i++)
        {
            if(quiz.getQuiz_id()==quizList.get(i).getQuiz_id())
            {
                assertThat(quizList.get(i).getQuestion()).isEqualTo(quiz.getQuestion());
            }
        }

    }
}