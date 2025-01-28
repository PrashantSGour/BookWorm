package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product_Type_Master 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int type_id;
    
    @Column(nullable=false)
    private  String type_Desc;

}