package com.example.spring_project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.spring_project.bean.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {

	@Query(value="select * from quiz_details where course_id=?", nativeQuery = true)
	public List<Quiz> findByCourse_Id(int course_id);
	
}
