//package com.Project.BookWorm.models;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//
//@Entity
//public class MyShelf_Table {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int Shelf_Id;
//    private int Customer_Id;
//    private int Product_Id;
//
//    @ManyToOne
//    @JoinColumn(name="Tran_Type")
//    private int Tran_Type;
//
//    @ManyToOne
//    @JoinColumn(name="Product_Expiry_Date")
//    private int Product_Expiry_Date;
//
//    private String Is_Active;
//    
//    public MyShelf_Table()
//{
//
//}
//
//public int getCustomer_Id() {
//    return Customer_Id;
//}
//public int getTran_Type() {
//    return Tran_Type;
//}
//public int getProduct_Id() {
//    return Product_Id;
//}
//public int getShelf_Id() {
//    return Shelf_Id;
//}
//public int getProduct_Expiry_Date() {
//    return Product_Expiry_Date;
//}
//public String getIs_Active() {
//    return Is_Active;
//}
//public void setCustomer_Id(int customer_Id) {
//    Customer_Id = customer_Id;
//}
//public void setIs_Active(String is_Active) {
//    Is_Active = is_Active;
//}
//public void setTran_Type(int tran_Type) {
//    Tran_Type = tran_Type;
//}
//public void setShelf_Id(int shelf_Id) {
//    Shelf_Id = shelf_Id;
//}
//public void setProduct_Id(int product_Id) {
//    Product_Id = product_Id;
//}
//public void setProduct_Expiry_Date(int product_Expiry_Date) {
//    Product_Expiry_Date = product_Expiry_Date;
//}
//
//}
//
//
