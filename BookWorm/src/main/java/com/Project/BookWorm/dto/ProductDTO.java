package com.Project.BookWorm.dto;

public class ProductDTO {
    private String productName;
    private double productBasePrice;
    private String languageDesc;
    private String genreDesc;
    private String productAuthor;

    public ProductDTO(String productName, double productBasePrice, String languageDesc, String genreDesc, String productAuthor) {
        this.productName = productName;
        this.productBasePrice = productBasePrice;
        this.languageDesc = languageDesc;
        this.genreDesc = genreDesc;
        this.productAuthor = productAuthor;
    }


	public String getProductAuthor() {
		return productAuthor;
	}


	public void setProductAuthor(String productAuthor) {
		this.productAuthor = productAuthor;
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
