package com.Project.BookWorm.Models;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class Invoice_Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inv_dtl_id")
    private int invDtlId;

    @ManyToOne
    @JoinColumn(name = "invoice_id", nullable = true)
    private Invoice invoice;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    
    private Product_Master product;

    @Column(nullable = true)
    private int quantity;

    @Column(nullable = true)
    private Double basePrice;

    @Column(nullable = true)
    private String tranType;

    private int rentNoOfDays;
}