package com.example.spring_project.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring_project.bean.Course;
import com.example.spring_project.repository.CourseRepository;


@Service
public class CourseService {
	
	@Autowired
	CourseRepository repo;

	public void insertCourse(Course c) {
		repo.save(c);
	}

	public List<Course> getAllCourses() {
		return repo.findAll();
	}
}
