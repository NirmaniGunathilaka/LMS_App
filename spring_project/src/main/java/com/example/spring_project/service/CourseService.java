package com.example.spring_project.service;

import com.example.spring_project.bean.Course;
import com.example.spring_project.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CourseService {
	
	@Autowired
	CourseRepository repo;

	public CourseService(CourseRepository repo) {
		this.repo = repo;
	}

	public void insertCourse(Course c) {
		repo.save(c);
	}

	public List<Course> getAllCourses() {
		return repo.findAll();
	}
}
