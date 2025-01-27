package com.Project.BookWorm.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "ProductAttribute")
public class ProductAttribute {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProdAttId")
    private Long prodAttId;

    @ManyToOne
    @JoinColumn(name = "AttributeId", nullable = false, referencedColumnName = "AttributeId")
    private AttributeMaster attribute;

    @ManyToOne
    @JoinColumn(name = "ProductId", nullable = false, referencedColumnName = "ProductId")
    private ProductMaster product;

    @Column(name = "AttributeValue", nullable = false)
    private String attributeValue;

    public Long getProdAttId() {
        return prodAttId;
    }

    public void setProdAttId(Long prodAttId) {
        this.prodAttId = prodAttId;
    }

    public AttributeMaster getAttribute() {
        return attribute;
    }

    public void setAttribute(AttributeMaster attribute) {
        this.attribute = attribute;
    }

    public ProductMaster getProduct() {
        return product;
    }

    public void setProduct(ProductMaster product) {
        this.product = product;
    }

    public String getAttributeValue() {
        return attributeValue;
    }

    public void setAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
    }
}
