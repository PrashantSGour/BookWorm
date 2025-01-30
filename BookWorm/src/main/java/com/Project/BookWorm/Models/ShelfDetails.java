package com.Project.BookWorm.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class ShelfDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shelf_dtl_id")
    private Integer shelfDetailId;

    // @OneToMany(targetEntity = MyShelf.class)
     @ManyToOne
     @JoinColumn(name = "shelf_id", nullable = true)
    private MyShelf shelf;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = true)
    private ProductMaster product;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private CustomerMaster customer;

    @Column(nullable = true)
    private Double basePrice;

    public Integer getShelfDetailId() {
		return shelfDetailId;
	}

	public void setShelfDetailId(Integer shelfDetailId) {
		this.shelfDetailId = shelfDetailId;
	}

	public MyShelf getShelf() {
		return shelf;
	}

	public void setShelf(MyShelf shelf) {
		this.shelf = shelf;
	}

	public ProductMaster getProduct() {
		return product;
	}

	public void setProduct(ProductMaster product) {
		this.product = product;
	}

	public CustomerMaster getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerMaster customer) {
		this.customer = customer;
	}

	public Double getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(Double basePrice) {
		this.basePrice = basePrice;
	}

	public String getTranType() {
		return tranType;
	}

	public void setTranType(String tranType) {
		this.tranType = tranType;
	}

	public RentDetails getRentDetails() {
		return rentDetails;
	}

	public void setRentDetails(RentDetails rentDetails) {
		this.rentDetails = rentDetails;
	}

	@Column(nullable = true)
    private String tranType;

    @ManyToOne
    @JoinColumn(name = "rent_id", nullable = true)
    private RentDetails rentDetails;
}