package com.example.spring_project.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.spring_project.bean.User;
import com.example.spring_project.service.UserService;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/user_details")
	public String insertUser(@RequestBody User user) {// request object received by client is emp
		service.insertUser(user);
		return "User inserted successfully!";
	}

	@GetMapping
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
	
	@GetMapping("/email")
	@ResponseBody
	public User getUserByEmail(@RequestParam String email) {
		return service.getUserByEmail(email);
	}

}