package com.Project.BookWorm.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Language_Master {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Language_Id;
	
	@Column(nullable=false)
	private String Language_Desc;
	
	@ManyToOne(targetEntity=Product_Type_Master.class)
	@Column(nullable=false)
	private Product_Type_Master Type_Id;
}