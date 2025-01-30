package com.Project.BookWorm.Services;

import com.Project.BookWorm.Models.ProductMaster;
import com.Project.BookWorm.Repository.ProductMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductMasterService {

    @Autowired
    private ProductMasterRepository productMasterRepository;

    // Create new product
    public ProductMaster createProduct(ProductMaster productMaster) {
        return productMasterRepository.save(productMaster);
    }

    // Read a single product by ID
    public Optional<ProductMaster> getProductById(int productId) {
        return productMasterRepository.findById(productId);
    }

    // Update a product by ID
    public ProductMaster updateProduct(int productId, ProductMaster productMaster) {
        Optional<ProductMaster> existingProduct = productMasterRepository.findById(productId);
        if (existingProduct.isPresent()) {
            ProductMaster productToUpdate = existingProduct.get();

            // Update the fields of the existing product with the new values
            productToUpdate.setProductName(productMaster.getProductName());
            productToUpdate.setProductEnglishName(productMaster.getProductEnglishName());
            productToUpdate.setProductType(productMaster.getProductType());
            productToUpdate.setProductBasePrice(productMaster.getProductBasePrice());
            productToUpdate.setProductSpCost(productMaster.getProductSpCost());
            productToUpdate.setProductOfferPrice(productMaster.getProductOfferPrice());
            productToUpdate.setProductOffPriceExpiryDate(productMaster.getProductOffPriceExpiryDate());
            productToUpdate.setProductDescriptionShort(productMaster.getProductDescriptionShort());
            productToUpdate.setProductDescriptionLong(productMaster.getProductDescriptionLong());
            productToUpdate.setProductIsbn(productMaster.getProductIsbn());
            productToUpdate.setProductAuthor(productMaster.getProductAuthor());
            productToUpdate.setProductLang(productMaster.getProductLang());
            productToUpdate.setProductGenre(productMaster.getProductGenre());
            productToUpdate.setRentable(productMaster.isRentable());
            productToUpdate.setRentPerDay(productMaster.getRentPerDay());
            productToUpdate.setMinRentDays(productMaster.getMinRentDays());

            // Save the updated product
            return productMasterRepository.save(productToUpdate);
        } else {
            // If product not found, throw an exception or handle accordingly
            throw new RuntimeException("Product not found for id: " + productId);
        }
    }

    // Delete a product by ID
    public void deleteProduct(int productId) {
        Optional<ProductMaster> existingProduct = productMasterRepository.findById(productId);
        if (existingProduct.isPresent()) {
            productMasterRepository.deleteById(productId);
        } else {
            // If product not found, throw an exception or handle accordingly
            throw new RuntimeException("Product not found for id: " + productId);
        }
    }

    // Fetch all products (optional, for general CRUD)
    public Iterable<ProductMaster> getAllProducts() {
        return productMasterRepository.findAll();
    }
}
