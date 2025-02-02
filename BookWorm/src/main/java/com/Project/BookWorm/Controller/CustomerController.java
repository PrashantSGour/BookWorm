package com.Project.BookWorm.Controller;

import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Models.CustomerMaster;
import com.Project.BookWorm.Models.MyShelf;
import com.Project.BookWorm.Repository.CartMasterRepository;
import com.Project.BookWorm.Repository.CustomerMasterRepository;
import com.Project.BookWorm.Service.CustomerMasterService;
import com.Project.BookWorm.Service.MyShelfService;


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
    
    @Autowired
    private MyShelfService myShelfService;

    @Autowired
    private CustomerMasterRepository customerRepository;

    @Autowired
    private CartMasterRepository cartMasterRepository;

    // Get all customers (JWT token required for this endpoint)
    @GetMapping
    public List<CustomerMaster> getAllCustomers() {
        return customerMasterService.getAllCustomers();
    }

    // Get customer by ID (JWT token required)
    @GetMapping("/{id}")
    public ResponseEntity<CustomerMaster> getCustomerById(@PathVariable Long id) {
        Optional<CustomerMaster> customer = customerMasterService.getCustomerById(id);
        return customer.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Register customer and create cart
    @PostMapping
    public ResponseEntity<CustomerMaster> registerCustomer(@RequestBody CustomerMaster customer) {
        // Register customer
        CustomerMaster savedCustomer = customerRepository.save(customer);

        // Create a cart for the registered customer
        CartMaster cart = new CartMaster();
        cart.setCustomer_id(savedCustomer);  // Link cart to customer
        cart.setCost(0.0);  // Initialize cost to 0
        cartMasterRepository.save(cart);
        
        // Create a MyShelf for the registered customer
        MyShelf myShelf = new MyShelf();
        myShelf.setCustomer(savedCustomer);
        myShelf.setNoOfBooks(0);  // Initial number of books
        myShelfService.createMyShelf(myShelf); // Save the MyShelf instance

        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    // Delete customer by ID (JWT token required)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable long id) {
        customerMasterService.deleteCustomer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
