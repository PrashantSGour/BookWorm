package com.Project.BookWorm.Models;

import java.util.Set;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class CartDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_details_id")
    private int cartDetailsId;

    public int getCartDetailsId() {
		return cartDetailsId;
	}

	public void setCartDetailsId(int cartDetailsId) {
		this.cartDetailsId = cartDetailsId;
	}

	public Set<CartMaster> getCartId() {
		return cartId;
	}

	public void setCartId(Set<CartMaster> cartId) {
		this.cartId = cartId;
	}

	public ProductMaster getProductId() {
		return productId;
	}

	public void setProductId(ProductMaster productId) {
		this.productId = productId;
	}

	public boolean isPurchased() {
		return isPurchased;
	}

	public void setPurchased(boolean isPurchased) {
		this.isPurchased = isPurchased;
	}

	public int getRentNoOfDays() {
		return rentNoOfDays;
	}

	public void setRentNoOfDays(int rentNoOfDays) {
		this.rentNoOfDays = rentNoOfDays;
	}

	@OneToMany
    @JoinColumn(name = "cart_id", nullable = true)
    private Set<CartMaster> cartId;

    @ManyToOne
    
    @JoinColumn(name = "product_id", nullable = true)
    private ProductMaster productId;

    @Column(nullable = true)
    private boolean isPurchased;

    private int rentNoOfDays;

}
