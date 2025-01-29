package com.Project.BookWorm.Models;

import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Shelf_Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shelf_dtl_id")
    private Long id;

    // @OneToMany(targetEntity = MyShelf.class)
     @OneToMany(mappedBy = "shelfDetails")
    private Set<MyShelf> shelf;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    private Product_Master product;

    @OneToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private Customer_Master customer;

    @Column(nullable = true)
    private Double basePrice;

    @Column(nullable = true)
    private String tranType;

    @ManyToOne
    @JoinColumn(name = "rent_id", nullable = true)
    private Rent_Details rentDetails;
}