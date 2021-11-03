package com.example.spring_project.bean;

import javax.persistence.*;
import java.io.Serializable;




@Entity(name = "user_details")
@Table(name="user_details")
public class User implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int user_id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "userType")
	private String usertype;

	@Column(name="email", unique = true)
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "contact_no")
	private int contactno;

	public User() {
	}

	public User(int user_id, String name, String gender, String usertype, String email, String password, int contactno) {
		this.user_id = user_id;
		this.name = name;
		this.gender = gender;
		this.usertype = usertype;
		this.email = email;
		this.password = password;
		this.contactno = contactno;
	}

	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getUsertype() {
		return usertype;
	}


	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public int getContactno() {
		return contactno;
	}


	public void setContactno(int contactno) {
		this.contactno = contactno;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", name=" + name + ", gender=" + gender + ", usertype=" + usertype
				+ ", email=" + email + ", password=" + password + ", contactno=" + contactno + "]";
	}
}