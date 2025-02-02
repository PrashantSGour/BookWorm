package com.Project.BookWorm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.BookWorm.Models.CartDetails;
import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Models.ProductMaster;
import com.Project.BookWorm.Models.TransactionType;
import com.Project.BookWorm.Models.CustomerMaster;
import com.Project.BookWorm.Repository.CartDetailsRepository;
import com.Project.BookWorm.Repository.CartMasterRepository;
import com.Project.BookWorm.Repository.ProductMasterRepository;
import com.Project.BookWorm.Repository.CustomerMasterRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CartDetailsService {

    @Autowired
    private CartDetailsRepository cartDetailsRepository;

    @Autowired
    private CartMasterRepository cartMasterRepository;

    @Autowired
    private ProductMasterRepository productRepository;

    @Autowired
    private CustomerMasterRepository customerRepository;

    // Add product to cart
    public CartDetails addProductToCart(long customerId, int productId, int quantity, int rentNoOfDays, String transType) {
        // Fetch customer
        Optional<CustomerMaster> customerOpt = customerRepository.findById(customerId);
        if (customerOpt.isEmpty()) {
            throw new RuntimeException("Customer not found.");
        }
        CustomerMaster customer = customerOpt.get();

        // Fetch cart for the customer
        CartMaster cart = cartMasterRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new RuntimeException("Cart not found for this customer."));

        // Fetch product
        Optional<ProductMaster> productOpt = productRepository.findById(productId);
        if (productOpt.isEmpty()) {
            throw new RuntimeException("Product not found.");
        }
        ProductMaster product = productOpt.get();

        // Create CartDetails entry
        CartDetails cartDetails = new CartDetails();
        cartDetails.setCartMaster(cart);  // Set the cart as parent (Link to CartMaster)
        cartDetails.setProduct(product);  // Set the product (Link to ProductMaster)
        cartDetails.setQuantity(quantity);  // Set quantity
        cartDetails.setPrice(product.getProductOfferPrice());  // Assuming offer price is used for price
        cartDetails.setTranstype(Enum.valueOf(TransactionType.class, transType));  // Set transaction type

        // Save the CartDetails entry
        return cartDetailsRepository.save(cartDetails);  // This saves the new record in CartDetails
    }

    // Method to get all cart details
    public List<CartDetails> getAllCartDetails() {
        return cartDetailsRepository.findAll();
    }

    // Method to get cart details by ID
    public Optional<CartDetails> getCartDetailsById(int id) {
        return cartDetailsRepository.findById(id);
    }
}
