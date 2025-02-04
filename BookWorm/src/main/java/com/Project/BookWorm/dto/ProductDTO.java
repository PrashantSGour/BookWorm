package com.Project.BookWorm.DTO;

public class ProductDTO {
    private String productName;
    private double productBasePrice;
    private String languageDesc;
    private String genreDesc;

    public ProductDTO(String productName, double productBasePrice, String languageDesc, String genreDesc) {
        this.productName = productName;
        this.productBasePrice = productBasePrice;
        this.languageDesc = languageDesc;
        this.genreDesc = genreDesc;
    }

    // Getters & Setters
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductBasePrice() {
        return productBasePrice;
    }

    public void setProductBasePrice(double productBasePrice) {
        this.productBasePrice = productBasePrice;
    }

    public String getLanguageDesc() {
        return languageDesc;
    }

    public void setLanguageDesc(String languageDesc) {
        this.languageDesc = languageDesc;
    }

    public String getGenreDesc() {
        return genreDesc;
    }

    public void setGenreDesc(String genreDesc) {
        this.genreDesc = genreDesc;
    }
}
