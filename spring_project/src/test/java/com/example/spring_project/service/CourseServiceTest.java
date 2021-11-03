package com.example.spring_project.service;

import com.example.spring_project.bean.Course;
import com.example.spring_project.repository.CourseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
@ExtendWith(MockitoExtension.class)
class CourseServiceTest {
    @Mock
    private CourseRepository courseRepository;

    private CourseService courseService;
    Course course=new Course(19,"Html","sadaa");

    @Test
    void insertCourse() {
        courseService.insertCourse(course);
        verify(courseRepository).save(course);
    }
    @BeforeEach
    void setUp() {
        this.courseService = new CourseService(this.courseRepository);
    }
    @Test
    void getAllCourses() {
        courseService.getAllCourses();
        verify(courseRepository).findAll();
    }
}