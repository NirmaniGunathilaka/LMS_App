//package com.example.spring_project.bean;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name="address_details")
//public class Address {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long addressId;
//	private String houseNo;
//	private String street;
//	private String city;
//	private String state;
//	private int pincode;
//
//	public Address() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public long getAddressId() {
//		return addressId;
//	}
//
//	public void setAddressId(long addressId) {
//		this.addressId = addressId;
//	}
//
//	public String getHouseNo() {
//		return houseNo;
//	}
//
//	public void setHouseNo(String houseNo) {
//		this.houseNo = houseNo;
//	}
//
//	public String getStreet() {
//		return street;
//	}
//
//	public void setStreet(String street) {
//		this.street = street;
//	}
//
//	public String getCity() {
//		return city;
//	}
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//	public String getState() {
//		return state;
//	}
//
//	public void setState(String state) {
//		this.state = state;
//	}
//
//	public int getPincode() {
//		return pincode;
//	}
//
//	public void setPincode(int pincode) {
//		this.pincode = pincode;
//	}
//
//	public Address(long addressId, String houseNo, String street, String city, String state, int pincode) {
//		super();
//		this.addressId = addressId;
//		this.houseNo = houseNo;
//		this.street = street;
//		this.city = city;
//		this.state = state;
//		this.pincode = pincode;
//	}
//
//	@Override
//	public String toString() {
//		return "Address [addressId=" + addressId + ", houseNo=" + houseNo + ", street=" + street + ", city=" + city
//				+ ", state=" + state + ", pincode=" + pincode + "]";
//	}
//
//}