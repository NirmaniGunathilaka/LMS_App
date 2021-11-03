package com.example.spring_project.service;

import com.example.spring_project.bean.Address;
import com.example.spring_project.repository.AddressRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
@ExtendWith(MockitoExtension.class)
class AddressServiceTest {
    @Mock
    private AddressRepository addressRepository;

    private AddressService addressService;
    Address address=new Address(
            2,
            "123","jhjh","ngp","kerala","india",440013,
            18
    );


    @Test
    void insertAddress() {
        addressService.insertAddress(address);
        verify(addressRepository).save(address);
    }
    @BeforeEach
    void setUp() {
        this.addressService = new AddressService(this.addressRepository);
    }

    @Test
    void getAllAddress() {
        addressService.getAllAddress();
        verify(addressRepository).findAll();
    }
}