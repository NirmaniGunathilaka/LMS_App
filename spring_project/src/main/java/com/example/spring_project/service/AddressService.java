package com.example.spring_project.service;

import com.example.spring_project.bean.Address;
import com.example.spring_project.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

	@Autowired
	AddressRepository repo;

	public void insertAddress(Address address) {
		repo.save(address);//insert new record if primary key not present else update it
	}
	public AddressService(AddressRepository repo) {
		this.repo = repo;
	}
	
	public List<Address> getAllAddress(){
		return repo.findAll();
	}
	
	public Address findByUser_id(int user_id) {
		return repo.findByUser_id(user_id);
	}
}
