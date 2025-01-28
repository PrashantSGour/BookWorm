package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Attribute_Master {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int Attribute_Id;
    
	@Column(nullable=false)
    private String Desc;


}
