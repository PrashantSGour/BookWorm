package com.Project.BookWorm.Services;

import com.Project.BookWorm.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.Project.BookWorm.Repository.CustomerMasterRepository;
import com.Project.BookWorm.Security.JwtUtil;

@Service
public class CustomerMasterService {

    @Autowired
    private CustomerMasterRepository customerMasterRepository;

    public List<Customer_Master> getAllCustomers(){
        return customerMasterRepository.findAll();
    }

    public Optional<Customer_Master> getCustomerById(Long id){
        return customerMasterRepository.findById(id);
    }

    public Customer_Master saveCustomer(Customer_Master customer) {
       
    	return customerMasterRepository.save(customer);
    }

    public void deleteCustomer(long id) {
        customerMasterRepository.deleteById(id);
    }

    // public Customer_Master updateCustomer(long id, Customer_Master customerDetails) {
    //     return customerMasterRepository.findById(id).map(customer -> {
    //         customer.setCustomerName(customerDetails.getCustomerName());
    //         customer.setCustomerEmail(customerDetails.getCustomerEmail());
    //         customer.setCustomerPassword(customerDetails.getCustomerPassword());
    //         customer.setDob(customerDetails.getDob());
    //         customer.setPhoneNumber(customerDetails.getPhoneNumber());
    //         customer.setPan(customerDetails.getPan());
    //         customer.setCart(customerDetails.getCart());
    //         customer.setLibraryPackage(customerDetails.getLibraryPackage());
    //         return customerMasterRepository.save(customer);
    //     }).orElseGet(() -> {
    //         customerDetails.setCustomerId(id);
    //         return customerMasterRepository.save(customerDetails);
    //     });
    // }

    // public Optional<Customer_Master> getCustomerByEmailAndPassword(String email, String password) {
    //     return customerMasterRepository.getCustomerByEmailAndPassword(email, password);
    // }

     @Autowired
    private JwtUtil jwtUtil;

    public Optional<String> authenticateUser(String email, String password) {
        Optional<Customer_Master> customer = customerMasterRepository.getCustomerByEmailAndPassword(email, password);
        
        if (customer.isPresent()) {
            // ✅ If user is valid, generate a JWT token
            String token = jwtUtil.generateToken(email);
            return Optional.of(token);
        }
        
        return Optional.empty();
    }

}
