package com.example.spring_project.bean;

public class UserAddress {
	
	private User user;
	
	private Address address;

	public UserAddress() {
		super();
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "UserAddress [user=" + user + ", address=" + address + "]";
	}
	
	
	
	
}
