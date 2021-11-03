package com.example.spring_project.repository;

import com.example.spring_project.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer>{


//	@Query("select u from user_details u where u.email=?1")
//    User findByEmail(String email);
//	

	@Query(value="select * from user_details where email=?", nativeQuery = true)
	public User findByEmail(String email);

}
