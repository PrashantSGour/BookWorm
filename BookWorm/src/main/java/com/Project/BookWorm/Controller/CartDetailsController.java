package com.Project.BookWorm.Controller;

import com.Project.BookWorm.Models.CartDetails;
import com.Project.BookWorm.Models.CartDetailsRequest;
import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Models.ProductMaster;
import com.Project.BookWorm.Service.CartDetailsService;
import com.Project.BookWorm.Repository.CartMasterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart-details")
@CrossOrigin("*")
public class CartDetailsController {

    private static final Logger logger = LoggerFactory.getLogger(CartDetailsController.class);

    @Autowired
    private CartDetailsService cartDetailsService;

    @Autowired
    private CartMasterRepository cartMasterRepository;

    // Add product to a customer's cart
    @PostMapping("/add")
    public ResponseEntity<CartDetails> addProductToCart(@RequestBody CartDetailsRequest cartDetailsRequest) {
        // Check if the customer has a cart_master
//        Optional<CartMaster> cartMasterOptional = cartMasterRepository.findByCustomerIdAndIsActive(cartDetailsRequest.getCustomerId());
//        logger.info("CartMaster found: " + cartMasterOptional.isPresent());
//
//        if (!cartMasterOptional.isPresent()) {
//            // If no cart_master exists, return an error response
//            logger.warn("No cart found for the customer");
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Or you can send a message like "No cart found for the customer"
//        }

        // Add product to the cart if cart_master exists
        CartDetails cartDetails = cartDetailsService.addProductToCart(
            cartDetailsRequest.getCustomerId(),
            cartDetailsRequest.getProductId(),
            cartDetailsRequest.getQuantity(),
            cartDetailsRequest.getRentNoOfDays(),
            cartDetailsRequest.getTransType(),
            cartDetailsRequest.getProduct()
        );
        logger.info("Product added to cart: " + cartDetails);
        return new ResponseEntity<>(cartDetails, HttpStatus.CREATED);
    }

    // Get all cart details
    @GetMapping
    public List<CartDetails> getAllCartDetails() {
        return cartDetailsService.getAllCartDetails();
    }

    // Get cart details by ID
    @GetMapping("/{id}")
    public ResponseEntity<CartDetails> getCartDetailsById(@PathVariable int id) {
        Optional<CartDetails> cartDetails = cartDetailsService.getCartDetailsById(id);
        return cartDetails.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
