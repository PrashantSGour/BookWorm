package com.Project.BookWorm.Controller;

import com.Project.BookWorm.Models.CartDetails;
import com.Project.BookWorm.Models.CartDetailsRequest;
import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Service.CartDetailsService;
import com.Project.BookWorm.Service.CartMasterService;
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

    @Autowired
    private CartMasterService cartMasterService;

    // Add product to a customer's cart
    @PostMapping("/add")
    public ResponseEntity<CartDetails> addProductToCart(@RequestBody CartDetailsRequest cartDetailsRequest) {

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

        // Update the cart cost
        cartMasterService.updateCartCost(cartMasterRepository.findByCustomerId(cartDetailsRequest.getCustomerId()).get());

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

    // Get cart details by customer ID
    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<CartDetails>> getCartDetailsByCustomerId(@PathVariable int customerId) {
        Optional<CartMaster> cartMasterOptional = cartMasterRepository.findByCustomerIdAndIsActive(customerId);
        if (!cartMasterOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<CartDetails> cartDetails = cartDetailsService.getCartDetailsByCartId(cartMasterOptional.get().getCartId());
        return new ResponseEntity<>(cartDetails, HttpStatus.OK);
    }
}
