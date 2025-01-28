//package com.Project.BookWorm.Models;
//
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//
//public class Invoice_Detail_Table {
//
//   
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY) 
//    private int Inv_Dtel_Id;
//
//    @ManyToOne
//    @JoinColumn(name = "Invoice_Id", referencedColumnName = "Invoice_Id")
//    private Invoice invoice;  
//
//    private  int Product_Id;  
//
//    @ManyToOne
//    @JoinColumn(name = "Base_Price", referencedColumnName = "Product_Base_price")
//    private Product_Base_Price base_price;  
//
//
//    private String trans_type;   
//    private int rent_no_of_days;  
//    
//    public int getInv_Dtel_Id() {
//        return Inv_Dtel_Id;
//    }
//
//    public void setInv_Dtel_Id(int inv_Dtel_Id) {
//        Inv_Dtel_Id = inv_Dtel_Id;
//    }
//
//    public Invoice getInvoice() {
//        return invoice;
//    }
//
//    public void setInvoice(Invoice invoice) {
//        this.invoice = invoice;
//    }
//
//    public Product_Master getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product_Master product) {
//        this.product = product;
//    }
//
//    public int getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }
//
//    public Product_Base_Price getBase_price() {
//        return base_price;
//    }
//
//    public void setBase_price(double base_price) {
//        this.base_price = base_price;
//    }
//
//    public String getTrans_type() {
//        return trans_type;
//    }
//
//    public void setTrans_type(String trans_type) {
//        this.trans_type = trans_type;
//    }
//
//    public int getRent_no_of_days() {
//        return rent_no_of_days;
//    }
//
//    public void setRent_no_of_days(int rent_no_of_days) {
//        this.rent_no_of_days = rent_no_of_days;
//    }
//     
//}
