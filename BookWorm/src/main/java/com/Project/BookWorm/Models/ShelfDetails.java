package com.Project.BookWorm.Models;

import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ShelfDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shelf_dtl_id")
    private Long id;

    // @OneToMany(targetEntity = MyShelf.class)
     @OneToMany(mappedBy = "shelfDetails")
    private Set<MyShelf> shelf;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    private ProductMaster product;

    @OneToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private CustomerMaster customer;

    @Column(nullable = true)
    private Double basePrice;

    @Column(nullable = true)
    private String tranType;

    @ManyToOne
    @JoinColumn(name = "rent_id", nullable = true)
    private RentDetails rentDetails;
}