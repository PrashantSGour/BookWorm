package com.Project.BookWorm.Controllers;

import com.Project.BookWorm.Models.CustomerMaster;
import com.Project.BookWorm.Services.CustomerMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerMasterService customerMasterService;

    // Get all customers (JWT token required for this endpoint)
    @GetMapping
    public List<CustomerMaster> getAllCustomers() {
        List<CustomerMaster> customers = customerMasterService.getAllCustomers();
        for(CustomerMaster c:customers) {
        	System.out.println(c);
        }
        return customers;
    }
    

    // Get customer by ID (JWT token required)
    @GetMapping("/{id}")
    public ResponseEntity<CustomerMaster> getCustomerById(@PathVariable Long id) {
        Optional<CustomerMaster> customer = customerMasterService.getCustomerById(id);
        return customer.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<CustomerMaster> saveCustomer(@RequestBody CustomerMaster customer) {
        System.out.println("Received Customer: " + customer);
        CustomerMaster savedCustomer = customerMasterService.saveCustomer(customer);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }


    // Delete customer by ID (JWT token required)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable long id) {
        customerMasterService.deleteCustomer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
