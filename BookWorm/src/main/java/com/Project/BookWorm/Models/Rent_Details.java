package com.Project.BookWorm.Models;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Rent_Details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rent_id")
    private int rentId;

    @ManyToOne
    @JoinColumn(name = "product_id",nullable = true)
    private Product_Master productId; 

    @ManyToOne
    @JoinColumn(name = "customer_id",nullable = true)
    private Customer_Master customerId; 

    @Column(nullable = true)
    private LocalDate rentStartDate;

    @Column(nullable = true)
    private LocalDate rentEndDate;

    @Column(nullable = true)
    private String rentStatus; 
}