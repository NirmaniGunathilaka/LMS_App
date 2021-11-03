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
class VideoControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void insertVideo() throws Exception {
        this.mockMvc.perform(post("/video/video_details")
                        .content("{\"name\":\"java video\"" +
                                ",\"url\":\"https://www.youtube.com/watch?v=eIrMbAQSU34\"" +
                                ",\"duration\":\"20\"" +
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
    void getAllVideos() throws Exception {
        this.mockMvc.perform(get("/video/")).andDo(print()).
                andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].video_id").exists())
                .andExpect(jsonPath("$[0].video_id").value(3));
    }
}