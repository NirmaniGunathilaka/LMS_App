package com.example.spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.spring_project.bean.User;

public interface UserRepository extends JpaRepository<User, Long>{

	@Query(value="select * from user_details where email=?", nativeQuery = true)
	public User findByEmail(String email);
}
