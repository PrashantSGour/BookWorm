package com.Project.BookWorm.Models;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class RentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rent_id")
    private int rentId;

    @ManyToOne
    @JoinColumn(name = "product_id",nullable = true)
    private ProductMaster productId; 

    @ManyToOne
    @JoinColumn(name = "customer_id",nullable = true)
    private CustomerMaster customerId; 

    public int getRentId() {
		return rentId;
	}

	public void setRentId(int rentId) {
		this.rentId = rentId;
	}

	public ProductMaster getProductId() {
		return productId;
	}

	public void setProductId(ProductMaster productId) {
		this.productId = productId;
	}

	public CustomerMaster getCustomerId() {
		return customerId;
	}

	public void setCustomerId(CustomerMaster customerId) {
		this.customerId = customerId;
	}

	public LocalDate getRentStartDate() {
		return rentStartDate;
	}

	public void setRentStartDate(LocalDate rentStartDate) {
		this.rentStartDate = rentStartDate;
	}

	public LocalDate getRentEndDate() {
		return rentEndDate;
	}

	public void setRentEndDate(LocalDate rentEndDate) {
		this.rentEndDate = rentEndDate;
	}

	public String getRentStatus() {
		return rentStatus;
	}

	public void setRentStatus(String rentStatus) {
		this.rentStatus = rentStatus;
	}

	@Column(nullable = true)
    private LocalDate rentStartDate;

    @Column(nullable = true)
    private LocalDate rentEndDate;

    @Column(nullable = true)
    private String rentStatus; 
}