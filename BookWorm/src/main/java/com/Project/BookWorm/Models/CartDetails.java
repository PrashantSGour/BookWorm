package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class CartDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_detail_id")
    private int cartDetailId;

    // Many-to-One relationship back to CartMaster (CartDetails is child)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", nullable = false)
    private CartMaster cartMaster;

    // Many-to-One relationship with ProductMaster (Product ID)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private ProductMaster product;  // ProductMaster reference

    private int quantity;
    private double price;
    private TransactionType transtype;

    // Getters and Setters

    public TransactionType getTranstype() {
		return transtype;
	}

	public void setTranstype(TransactionType transtype) {
		this.transtype = transtype;
	}

	public int getCartDetailId() {
        return cartDetailId;
    }

    public void setCartDetailId(int cartDetailId) {
        this.cartDetailId = cartDetailId;
    }

    public CartMaster getCartMaster() {
        return cartMaster;
    }

    public void setCartMaster(CartMaster cartMaster) {
        this.cartMaster = cartMaster;
    }

    public ProductMaster getProduct() {
        return product;
    }

    public void setProduct(ProductMaster product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
