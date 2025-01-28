package com.Project.BookWorm.Models;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class Product_Master {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int Product_id;

@Column(nullable=false)
private String Product_name;

@Column(nullable=false)
private String Product_english_name;

@ManyToOne(targetEntity=Product_Type_Master.class)
@Column(nullable=false)
private String Product_type;

@Column(nullable=false)
private Double Product_baseprice;

@Column(nullable=false)
private Double Product_sp_cost;
private Double Product_offprice;

@Column(nullable=false)
private Double Product_off_price_expirydate;

@Column(nullable=false)
private String Product_description_short;

@Column(nullable=false)
private String Product_description_long;

@Column(nullable=false)
private int Product_isbn;

@Column(nullable=false)
private String Product_author;

//@ManyToOne
//@JoinColumn(name = "Product_publisher")
//private String Product_publisher;


@ManyToOne(targetEntity=Language_Master.class)
@Column(nullable=false)
private String Product_lang;

@ManyToOne(targetEntity=Genre_Master.class)
@Column(nullable=false)
private String Product_Genere;

@Column(nullable=false)
private char Is_Rentable;

@Column(nullable=false)
private Double Rent_per_day;

@Column(nullable=false, columnDefinition = "int default 3")
private int Min_rent_days;


}
