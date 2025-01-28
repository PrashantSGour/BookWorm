package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long invoiceId;

    @Column(nullable = false)
    private LocalDate invoiceDate;

    @ManyToOne(targetEntity = Customer_Master.class)
    @Column(nullable = false)
    private Customer_Master customer;

    @Column(nullable = false)
    private Double invoiceAmount;

    
}
