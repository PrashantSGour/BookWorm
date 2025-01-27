package com.Project.BookWorm.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Product_Master {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int Product_id;
private String Product_name;
private String Product_english_name;

@ManyToOne
@JoinColumn(name = "Type_Desc")
private String Product_type;

private Double Product_baseprice;
private Double Product_sp_cost;
private Double Product_offprice;
private Double Product_off_price_expirydate;
private String Product_description_short;
private String Product_description_long;
private int Product_isbn;
private String Product_author;

@ManyToOne
@JoinColumn(name = "Product_publisher")
private String Product_publisher;


@ManyToOne
@JoinColumn(name = "Language_Desc")
private String Product_lang;

private String Product_Genere;
private char Is_Rentable;
private char Is_Library;
private Double Rent_per_day;
private int Min_rent_days;


public Product_Master()
{

}

public char getIs_Library() {
    return Is_Library;
}

public char getIs_Rentable() {
    return Is_Rentable;
}

public int getMin_rent_days() {
    return Min_rent_days;
}

public String getProduct_Genere() {
    return Product_Genere;
}

public String getProduct_author() {
    return Product_author;
}

public Double getProduct_baseprice() {
    return Product_baseprice;
}

public String getProduct_description_long() {
    return Product_description_long;
}

public String getProduct_description_short() {
    return Product_description_short;
}

public String getProduct_english_name() {
    return Product_english_name;
}

public int getProduct_id() {
    return Product_id;
}

public int getProduct_isbn() {
    return Product_isbn;
}

public String getProduct_lang() {
    return Product_lang;
}

public String getProduct_name() {
    return Product_name;
}

public Double getProduct_off_price_expirydate() {
    return Product_off_price_expirydate;
}

public Double getProduct_offprice() {
    return Product_offprice;
}

public String getProduct_publisher() {
    return Product_publisher;
}

public Double getProduct_sp_cost() {
    return Product_sp_cost;
}

public String getProduct_type() {
    return Product_type;
}

public Double getRent_per_day() {
    return Rent_per_day;
}

public void setIs_Library(char is_Library) {
    Is_Library = is_Library;
}

public void setIs_Rentable(char is_Rentable) {
    Is_Rentable = is_Rentable;
}

public void setMin_rent_days(int min_rent_days) {
    Min_rent_days = min_rent_days;
}

public void setProduct_Genere(String product_Genere) {
    Product_Genere = product_Genere;
}

public void setProduct_description_long(String product_description_long) {
    Product_description_long = product_description_long;
}

public void setProduct_publisher(String product_publisher) {
    Product_publisher = product_publisher;
}

public void setProduct_offprice(Double product_offprice) {
    Product_offprice = product_offprice;
}

public void setProduct_sp_cost(Double product_sp_cost) {
    Product_sp_cost = product_sp_cost;
}

public void setProduct_name(String product_name) {
    Product_name = product_name;
}

public void setProduct_type(String product_type) {
    Product_type = product_type;
}
public void setRent_per_day(Double rent_per_day) {
    Rent_per_day = rent_per_day;
}
public void setProduct_off_price_expirydate(Double product_off_price_expirydate) {
    Product_off_price_expirydate = product_off_price_expirydate;
}
public void setProduct_lang(String product_lang) {
    Product_lang = product_lang;
}
public void setProduct_isbn(int product_isbn) {
    Product_isbn = product_isbn;
}
public void setProduct_id(int product_id) {
    Product_id = product_id;
}
public void setProduct_english_name(String product_english_name) {
    Product_english_name = product_english_name;
}
public void setProduct_description_short(String product_description_short) {
    Product_description_short = product_description_short;
}
public void setProduct_baseprice(Double product_baseprice) {
    Product_baseprice = product_baseprice;
}
public void setProduct_author(String product_author) {
    Product_author = product_author;
}
}
