package com.example.spring_project.repository;

import com.example.spring_project.bean.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void findByEmail() {
        User user = new User(18,
                "abc",
                "male",
                "user",
                "jk@gmail.com",
                "1234",
                "1234567890");

        userRepository.save(user);

        String exceptedResult = user.getPassword();
        String actualResult = userRepository.findByEmail("jkl@gmail.com").getPassword();
        assertThat(actualResult).isEqualTo(exceptedResult);

        String exceptedResult1 = user.getName();
        String actualResult1 = userRepository.findByEmail("jkl@gmail.com").getName();
        assertThat(actualResult1).isEqualTo(exceptedResult1);
    }
}