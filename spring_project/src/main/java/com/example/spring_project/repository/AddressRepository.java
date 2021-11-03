package com.example.spring_project.repository;

import com.example.spring_project.bean.Address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
