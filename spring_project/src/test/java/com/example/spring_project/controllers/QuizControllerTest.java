package com.example.spring_project.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class QuizControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void insertQuiz() throws Exception{
        this.mockMvc.perform(post("/quiz/insertQuiz/{course_id}",16)
                .content("{\"question\":\"Who developed the Python language?\"" +
                        ",\"option1\":\"Wick van Rossum\"" +
                        ",\"option2\":\"Guido van Rossum\"" +
                        ",\"option3\":\"Zim Den\"" +
                        ",\"option4\":\"Niene Stom\"" +
                        ",\"answer\":\"Guido van Rossum\"" +
                        "}"
                )
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"));
    }

    @Test
    void getAllQuiz() throws Exception {
        this.mockMvc.perform(get("/quiz/")).andDo(print()).
                andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].question").exists())
                .andExpect(jsonPath("$[0].question").value("What is java"));
    }

    @Test
    void findByCourse_Id() throws Exception {
        this.mockMvc.perform(get("/quiz/getQuiz/{course_id}","13"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].courseId").exists())
               .andExpect(jsonPath("$[0].courseId").value("13"));
    }
}