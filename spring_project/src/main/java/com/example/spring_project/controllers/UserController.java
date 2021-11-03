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
	
	@PostMapping("/user_details")
	public User insertUser(@RequestBody UserAddress userAddress) {//request object received by client is emp
		
		try {
			Address address=userAddress.getAddress();
			User user=userAddress.getUser();
			userservice.insertUser(user);
			System.out.println(userservice.findByEmail(user.getEmail()));
			User getUser=userservice.findByEmail(user.getEmail());
			System.out.println(getUser.getUser_id());
			address.setUser_id(getUser.getUser_id());
			System.out.println(address);
			addrservice.insertAddress(address);
			return userservice.findByEmail(user.getEmail());
		}catch(Exception e)
		{
			return null;
		}
	}

//	@GetMapping("/")
//	public String testSecurity()
//	{
//		return "hello";
//	}
	
	@GetMapping
	public List<User> getAllUsers(){
		if(userservice.getAllUsers()!=null)
			return userservice.getAllUsers();
		else
			return null;
	}
	
	@PostMapping("/get_user/{email}")
	public UserAddress findByEmail(@PathVariable String email){
		try {
			UserAddress ua=new UserAddress();
			User user= (userservice.findByEmail(email));
			Address address=addrservice.findByUser_id(user.getUser_id());
			
			ua.setUser(user);
			ua.setAddress(address);
			return ua;
		}catch (Exception e) {
			return null;
		}
	}
	
	@GetMapping("/email")
	@ResponseBody
	public User getUserByEmail(@RequestParam String email,@RequestParam String password) {
		try {
			User user=userservice.getUserByEmail(email);
			if(user.getPassword().equals(password))
				return userservice.getUserByEmail(email);
			else
				return null;
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@GetMapping("/forgot_password")
	@ResponseBody
	public User changePassword(@RequestParam(value="email") String email,@RequestParam(value="password") String password) {
		try {
			
			User user=userservice.getUserByEmail(email);
			user.setPassword(password);
			userservice.insertUser(user);
			return userservice.getUserByEmail(email);
		} catch (Exception e) {
			return null;
		}
	}

}