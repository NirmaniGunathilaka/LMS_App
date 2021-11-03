package com.example.spring_project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_project.bean.Course;
import com.example.spring_project.service.CourseService;

@CrossOrigin
@RestController
@RequestMapping("/course")
public class CourseController {

	
	@Autowired
	CourseService service;
	
	@PostMapping("/course_details")
	public String insertCourse(@RequestBody Course course) {//request object received by client is emp
		service.insertCourse(course);
		System.out.println(course.getNotes());
		System.out.println(course.toString());
		return "Course inserted successfully!";
	}
	
	@GetMapping
	public List<Course> getAllCourses(){
		return service.getAllCourses();
		}
}
