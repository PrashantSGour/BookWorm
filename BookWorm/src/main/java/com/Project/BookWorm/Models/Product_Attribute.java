package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "ProductAttribute")
public class Product_Attribute {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prodAttId;

    @ManyToOne(targetEntity=Attribute_Master.class)
    @Column(nullable = false)
    private Attribute_Master attribute;

    @ManyToOne(targetEntity=Product_Master.class)
    private Product_Master product;

    @Column(nullable = false)
    private String attributeValue;

   
}
