package com.example.spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring_project.bean.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
	
	
}
