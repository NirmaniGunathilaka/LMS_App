package com.example.spring_project.bean;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name="address_details")
public class Address implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id")
	private int address_id;
	
	@Column(name = "house_no")
	private String house_no;
	
	@Column(name = "street")
	private String street;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "country")
	private String country;
	
	@Column(name = "pincode")
	private int pincode;
	 
	@Column(name="user_id")
	private int user_id;
	
	public Address() {
		super();
	}

	public Address(int address_id, String house_no, String street, String city, String state, String country,
			int pincode, int user_id) {
		super();
		this.address_id = address_id;
		this.house_no = house_no;
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
		this.user_id = user_id;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}


	public String getHouse_no() {
		return house_no;
	}

	public void setHouse_no(String house_no) {
		this.house_no = house_no;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", house_no=" + house_no + ", street=" + street + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", pincode=" + pincode + ", user_id=" + user_id + "]";
	}
	
	
	
}


