package com.Project.BookWorm.Models;

import java.util.Set;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class Cart_Details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_details_id")
    private int cartDetailsId;

    @OneToMany
    @JoinColumn(name = "cart_id", nullable = true)
    private Set<Cart_Master> cartId;

    @ManyToOne
    
    @JoinColumn(name = "product_id", nullable = true)
    private Product_Master productId;

    @Column(nullable = true)
    private boolean isPurchased;

    private int rentNoOfDays;

}
