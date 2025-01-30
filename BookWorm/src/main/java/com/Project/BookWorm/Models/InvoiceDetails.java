package com.Project.BookWorm.Models;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class InvoiceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inv_dtl_id")
    private int invDtlId;

    @ManyToOne
    @JoinColumn(name = "invoice_id", nullable = true)
    private Invoice invoice;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    
    private ProductMaster product;

    @Column(nullable = true)
    private int quantity;

    @Column(nullable = true)
    private Double basePrice;

    @Column(nullable = true)
    private String tranType;

    private int rentNoOfDays;
}