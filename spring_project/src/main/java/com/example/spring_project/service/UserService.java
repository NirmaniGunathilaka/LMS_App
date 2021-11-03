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
	
	public UserService(UserRepository repo) {
		this.repo = repo;
	}
	
	public void insertUser(User e) {
		repo.save(e);	
	}

	
	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User getUserById(int user_id) {
		return repo.findById(user_id).get();
		
	}
	
	public User getUserByEmail(String email) {
		return repo.findByEmail(email);
		
	}
	
	public User findByEmail(String email) {
		
		User user=repo.findByEmail(email);
		return user;	
	}
}
