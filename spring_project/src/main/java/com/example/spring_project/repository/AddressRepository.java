package com.example.spring_project.repository;

import com.example.spring_project.bean.Address;
import com.example.spring_project.bean.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AddressRepository extends JpaRepository<Address, Integer>{
	@Query(value="select * from address_details where user_id=?", nativeQuery = true)
	public Address findByUser_id(int user_id);
}
