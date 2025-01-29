package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product_Arribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_attribute_id")
    private int productAttributeId;

    @ManyToOne
    @JoinColumn(name = "attribute_id",nullable = true)
    private Attribute_Master attributeId;

    @ManyToOne
    @JoinColumn(name = "product_id",nullable = true)
    private Product_Master productId;

    @Column(nullable = true,name = "attribute_value")
    private String attributeValue;


}