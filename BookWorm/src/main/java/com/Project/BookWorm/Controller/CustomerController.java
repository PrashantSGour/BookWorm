package com.Project.BookWorm.Controller;

import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Models.CustomerMaster;
import com.Project.BookWorm.Models.MyShelf;
import com.Project.BookWorm.Repository.CartMasterRepository;
import com.Project.BookWorm.Repository.CustomerMasterRepository;
import com.Project.BookWorm.Service.CustomerMasterService;
import com.Project.BookWorm.Service.MyShelfService;
import com.Project.BookWorm.dto.ApiResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin("http://localhost:3000")
public class CustomerController {

    private static final Logger logger = LogManager.getLogger(CustomerController.class);

    @Autowired
    private CustomerMasterService customerMasterService;
    @Autowired
    private RestTemplate restTemplate;
    
    @Autowired
    private MyShelfService myShelfService;

    @Autowired
    private CustomerMasterRepository customerRepository;

    @Autowired
    private CartMasterRepository cartMasterRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Get all customers (JWT token required for this endpoint)
    @GetMapping
    public List<CustomerMaster> getAllCustomers() {
        logger.info("Fetching all customers");
        List<CustomerMaster> customers = customerMasterService.getAllCustomers();
        logger.debug("Fetched {} customers", customers.size());
        return customers;
    }

    // Get customer by ID (JWT token required)
    @GetMapping("/{id}")
    public ResponseEntity<CustomerMaster> getCustomerById(@PathVariable Long id) {
        logger.info("Fetching customer with ID: {}", id);
        Optional<CustomerMaster> customer = customerMasterService.getCustomerById(id);
        if (customer.isPresent()) {
            logger.info("Customer found: {}", customer.get());
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            logger.warn("Customer with ID {} not found", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get customer by email
    @GetMapping("/email/{email}")
    public ResponseEntity<CustomerMaster> getCustomerByEmail(@PathVariable String email) {
        logger.info("Fetching customer with email: {}", email);
        Optional<CustomerMaster> customer = customerMasterService.getCustomerByEmail(email);
        if (customer.isPresent()) {
            logger.info("Customer found: {}", customer.get());
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            logger.warn("Customer with email {} not found", email);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Register customer and create cart
//    @PostMapping
//    public ResponseEntity<CustomerMaster> registerCustomer(@RequestBody CustomerMaster customer) {
//        logger.info("Registering new customer: {}", customer.getCustomername());
//        try {
//            // Encrypt the customer's password before saving
//            customer.setCustomerpassword(passwordEncoder.encode(customer.getCustomerpassword()));
//            
//            CustomerMaster savedCustomer = customerRepository.save(customer);
//            logger.debug("Saved customer: {}", savedCustomer);
//
//            // Create a cart for the registered customer
//            CartMaster cart = new CartMaster();
//            cart.setCustomerId(savedCustomer);  // Link cart to customer
//            cart.setCost(0.0);  // Initialize cost to 0
//            cartMasterRepository.save(cart);
//            logger.info("Cart created for customer ID: {}", savedCustomer.getCustomerid());
//
//            // Create a MyShelf for the registered customer
//            MyShelf myShelf = new MyShelf();
//            myShelf.setCustomer(savedCustomer);	
//            myShelf.setNoOfBooks(0);  // Initial number of books
//            myShelfService.createMyShelf(myShelf);
//            logger.info("MyShelf created for customer ID: {}", savedCustomer.getCustomerid());
//
//            return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
//        } catch (Exception e) {
//            logger.error("Error occurred during customer registration: {}", e.getMessage());
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    
    
    @PostMapping
    public ResponseEntity<ApiResponse> registerCustomer(@RequestBody CustomerMaster customer) {
        logger.info("Registering new customer: {}", customer.getCustomername());
        

        try {
            // Encrypt the customer's password before saving
            customer.setCustomerpassword(passwordEncoder.encode(customer.getCustomerpassword()));
            
            CustomerMaster savedCustomer = customerRepository.save(customer);
            logger.debug("Saved customer: {}", savedCustomer);

            String emailServiceUrl = "http://localhost:8081/api/sendEmail";
            Map<String, Object> emailMaster = new HashMap<>();
            emailMaster.put("username", savedCustomer.getCustomername());
            emailMaster.put("email", savedCustomer.getCustomeremail());
            
            restTemplate.postForObject(emailServiceUrl, emailMaster, String.class);
            
            // Create a cart for the registered customer
            CartMaster cart = new CartMaster();
            cart.setCustomerId(savedCustomer);  // Link cart to customer
            cart.setCost(0.0);  // Initialize cost to 0
            cartMasterRepository.save(cart);
            logger.info("Cart created for customer ID: {}", savedCustomer.getCustomerid());

            // Create a MyShelf for the registered customer
            MyShelf myShelf = new MyShelf();
            myShelf.setCustomer(savedCustomer);
            myShelf.setNoOfBooks(0);  // Initial number of books
            myShelfService.createMyShelf(myShelf);
            logger.info("MyShelf created for customer ID: {}", savedCustomer.getCustomerid());

            //return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Customer added successfully", null));
        } catch (Exception e) {
            logger.error("Error occurred during customer registration: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete customer by ID (JWT token required)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable long id) {
        logger.info("Deleting customer with ID: {}", id);
        customerMasterService.deleteCustomer(id);
        logger.info("Customer with ID {} deleted successfully", id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
