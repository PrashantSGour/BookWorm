package com.Project.BookWorm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Project.BookWorm.Models.CartMaster;
import com.Project.BookWorm.Repository.CartMasterRepository;
import java.util.List;
import java.util.Optional;

@Service
public class CartMasterService {
    
    @Autowired
    private CartMasterRepository cartMasterRepository;

    // Get all carts
    public List<CartMaster> getAllCarts() {
        return cartMasterRepository.findAll();
    }

    // Get cart by ID
    public Optional<CartMaster> getCartById(int id) {
        return cartMasterRepository.findById(id);
    }

    // Create or update cart
    public CartMaster saveCart(CartMaster cartMaster) {
        return cartMasterRepository.save(cartMaster);
    }

    // Delete cart by ID
    public void deleteCart(int id) {
        cartMasterRepository.deleteById(id);
    }
}
