package com.example.spring_project.controllers;

import com.example.spring_project.bean.Address;
import com.example.spring_project.bean.User;
import com.example.spring_project.bean.UserAddress;
import com.example.spring_project.repository.UserRepository;
import com.example.spring_project.service.AddressService;
import com.example.spring_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@CrossOrigin
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userservice;
	
	@Autowired
	AddressService addrservice;

	@Autowired
	UserRepository repo;
	
	@PostMapping("/user_details")
	public String insertUser(@RequestBody UserAddress userAddress) {//request object received by client is emp
		
		
		Address address=userAddress.getAddress();
		User user=userAddress.getUser();
		
		userservice.insertUser(user);
		
		System.out.println(userservice.findByEmail(user.getEmail()));
		User getUser=userservice.findByEmail(user.getEmail());
		System.out.println(getUser.getUser_id());
		address.setUser_id(getUser.getUser_id());
		System.out.println(address);
		addrservice.insertAddress(address);
		
		return "User inserted successfully!";
	}

	@GetMapping
	public List<User> getAllUsers(){
		return userservice.getAllUsers();
		}
	
	@PostMapping("/get_user/{email}")
	public User findByEmail(@PathVariable String email){
		return (userservice.findByEmail(email));
		}

	
	@GetMapping("/email")
	@ResponseBody
	public User getUserByEmail(@RequestParam String email) {
		return userservice.getUserByEmail(email);
	}

}