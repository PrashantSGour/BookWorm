//package com.Project.BookWorm.Models;
//
//import javax.persistence.*;
//import java.math.BigDecimal;
//
//@Entity
//@Table(name = "ProdBenMaster")
//public class ProdBen_Master {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "ProdBen-id")
//    private int prodBenId;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ProdBen-ben-id", referencedColumnName = "ben_id")
//    private Beneficiary beneficiary;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ProdBen-product-id", referencedColumnName = "product_id")
//    private Product product;
//
//    @Column(name = "ProdBen-percentage")
//    private BigDecimal prodBenPercentage;
//
//    public ProdBen_Master() {}
//
//    public ProdBen_Master(int prodBenId, Beneficiary beneficiary, Product product, BigDecimal prodBenPercentage) {
//        this.prodBenId = prodBenId;
//        this.beneficiary = beneficiary;
//        this.product = product;
//        this.prodBenPercentage = prodBenPercentage;
//    }
//
//    public int getProdBenId() {
//        return prodBenId;
//    }
//
//    public void setProdBenId(int prodBenId) {
//        this.prodBenId = prodBenId;
//    }
//
//    public Beneficiary getBeneficiary() {
//        return beneficiary;
//    }
//
//    public void setBeneficiary(Beneficiary beneficiary) {
//        this.beneficiary = beneficiary;
//    }
//
//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }
//
//    public BigDecimal getProdBenPercentage() {
//        return prodBenPercentage;
//    }
//
//    public void setProdBenPercentage(BigDecimal prodBenPercentage) {
//        this.prodBenPercentage = prodBenPercentage;
//    }
//
//    @Override
//    public String toString() {
//        return "ProdBenMaster{" +
//                "prodBenId=" + prodBenId +
//                ", beneficiary=" + beneficiary +
//                ", product=" + product +
//                ", prodBenPercentage=" + prodBenPercentage +
//                '}';
//    }
//}
