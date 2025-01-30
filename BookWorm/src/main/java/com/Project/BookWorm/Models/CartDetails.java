package com.Project.BookWorm.Models;

import java.util.Set;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class CartDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_details_id")
    private int cartDetailsId;

    @OneToMany
    @JoinColumn(name = "cart_id", nullable = true)
    private Set<CartMaster> cartId;

    @ManyToOne
    
    @JoinColumn(name = "product_id", nullable = true)
    private ProductMaster productId;

    @Column(nullable = true)
    private boolean isPurchased;

    private int rentNoOfDays;

}
