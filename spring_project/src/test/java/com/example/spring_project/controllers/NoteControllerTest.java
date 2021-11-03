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
class NoteControllerTest {
    @Autowired
    private MockMvc mockMvc;


    @Test
    void insertNote() throws Exception {
        this.mockMvc.perform(post("/note/note_details")
                        .content("{\"drive_link\":\"https://drive.google.com/drive/folders/1H38j-de3ImTEaR0bokZu1AI7CFPmA_FY?usp=sharing\"" +
                                ",\"course\":{\"course_id\":\"13\"" +
                                ",\"name\":\"Java\""+
                                ",\"description\":\"This is a Java Course!\""+
                                "}}"
                        )
                        .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"));
    }

    @Test
    void getAllNotes() throws Exception {
        this.mockMvc.perform(get("/note/")).andDo(print()).
                andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].note_id").exists())
                .andExpect(jsonPath("$[0].note_id").value(4));

    }
}