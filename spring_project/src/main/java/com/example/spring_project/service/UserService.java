package com.example.spring_project.service;

import com.example.spring_project.bean.User;
import com.example.spring_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class UserService {

	@Autowired
	UserRepository repo;

	public void insertUser(User e) {
		repo.save(e);	
	}

	public UserService(UserRepository repo) {
		this.repo = repo;
	}

	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User getUserByEmail(String email) {
		return repo.findByEmail(email);
		
	}
	
	public User findByEmail(String email) {
		
		User user=repo.findByEmail(email);
		return user;	
	}
}
