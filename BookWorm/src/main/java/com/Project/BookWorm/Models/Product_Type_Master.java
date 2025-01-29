package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product_Type_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private int TypeId;
    
    @Column(nullable = true)
    private String TypeDesc;
}