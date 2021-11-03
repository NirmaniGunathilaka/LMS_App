package com.example.spring_project.service;

import java.io.Console;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring_project.bean.User;
import com.example.spring_project.repository.UserRepository;



@Service
public class UserService {

	@Autowired
	UserRepository repo;

	public void insertUser(User user) {
		repo.save(user);
	}

	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User getUserByEmail(String email) {
		return repo.findByEmail(email);
		
	}
}