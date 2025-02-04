package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class CartMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private int cartId;

    @OneToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerMaster customer_id;

    // One-to-Many relationship with CartDetails (CartMaster is parent)
    @OneToMany(mappedBy = "cartMaster", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartDetails> cartDetails;

    private double cost;

    // Getters and Setters

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public CustomerMaster getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(CustomerMaster customer_id) {
        this.customer_id = customer_id;
    }

    public Set<CartDetails> getCartDetails() {
        return cartDetails;
    }

    public void setCartDetails(Set<CartDetails> cartDetails) {
        this.cartDetails = cartDetails;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
