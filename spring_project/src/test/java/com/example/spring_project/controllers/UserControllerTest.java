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
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void insertUser() throws Exception{
        this.mockMvc.perform(post("/user/user_details")
                        .content("{\"user\":{\"name\":\"abc\"" +
                                ",\"gender\":\"male\"" +
                                ",\"usertype\":\"user\"" +
                                ",\"email\":\"jklnopee@gmail.com\"" +
                                ",\"password\":\"1234\"" +
                                ",\"contactno\":\"1234567890\"}" +
                                ",\"address\":{\"house_no\":\"123\"" +
                                ",\"street\":\"jhjh\""+
                                ",\"city\":\"ngp\""+
                                ",\"state\":\"kerala\"" +
                                ",\"country\":\"india\"" +
                                ",\"pincode\":\"440013\"" +
                                "}}"

                        )
                        .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"));
    }

    @Test
    void getAllUsers() throws Exception {
        this.mockMvc.perform(get("/user/")).andDo(print()).
                andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].email").exists())
                .andExpect(jsonPath("$[0].email").value("abc@gmail.com"));
    }

    @Test
    void findByEmail() throws Exception {
        this.mockMvc.perform(post("/user/get_user/{email}","abc@gmail.com"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("email").exists())
                .andExpect(jsonPath("email").value("abc@gmail.com"));
    }

    @Test
    void getUserByEmail() throws Exception {
        this.mockMvc.perform(get("/user/email").param("email","abc@gmail.com"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("email").exists())
                .andExpect(jsonPath("email").value("abc@gmail.com"));
    }
}