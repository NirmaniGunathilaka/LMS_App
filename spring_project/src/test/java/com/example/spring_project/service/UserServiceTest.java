package com.example.spring_project.service;

import com.example.spring_project.bean.User;
import com.example.spring_project.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    private UserService userService;

    User user= new User(18,
            "abc",
            "male",
            "user",
            "jkl@gmail.com",
            "1234",
            1234567890);

    @Test
    void insertUser() {

        userService.insertUser(user);
        verify(userRepository).save(user);

    }
    @BeforeEach
    void setUp() {
        this.userService = new UserService(this.userRepository);
    }


    @Test
    void getAllUsers() {
        userService.getAllUsers();
        verify(userRepository).findAll();
    }

    @Test
    void getUserByEmail() {
        userService.getUserByEmail("jkl@gmail.com");
        verify(userRepository).findByEmail("jkl@gmail.com");
    }

    @Test
    void findByEmail() {
        userService.findByEmail("jkl@gmail.com");
        verify(userRepository).findByEmail("jkl@gmail.com");

    }
}