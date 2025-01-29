package com.Project.BookWorm.Models;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private int invoiceId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private Customer_Master customerId;
    
    @Column(nullable = true)
    private double amount;

    @Column(nullable = true)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = true,referencedColumnName = "cart_id")
    private Cart_Master cartId;

//     @OneToMany(mappedBy = "invoice") // 'invoice' refers to the field in InvoiceDetails
//     private Set<InvoiceDetails> invoiceDetails;
}
