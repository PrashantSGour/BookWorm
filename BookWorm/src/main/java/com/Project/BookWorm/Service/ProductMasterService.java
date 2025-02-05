package com.Project.BookWorm.Service;

import com.Project.BookWorm.Models.ProductMaster;

import com.Project.BookWorm.Repository.ProductMasterRepository;

import io.jsonwebtoken.lang.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
import com.Project.BookWorm.dto.ProductDTO;

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
    //by language id
    // public List<ProductMaster> getByLanguageId(int id) {
    //     return List<productMasterRepository.findByLanguageId(id)>;
    // }
    // public List<ProductMaster> getFilteredProducts(int genreId, int languageId) {
    //         return productRepository.findProductsByFilters(genreId, languageId);
    // }
    // public List<ProductMaster> getFilteredProducts(String genreDesc, String languageDesc) {
    //     return productMasterRepository.findProductsByFilters(genreDesc, languageDesc);
    public List<com.Project.BookWorm.dto.ProductDTO> getFilteredProducts(String genreDesc, String languageDesc) {
        List<ProductMaster> products = productMasterRepository.findProductsByFilters(genreDesc, languageDesc);


        return products.stream()
                .map(product -> new ProductDTO(
                        product.getProductName(),
                        product.getProductBasePrice(),
                        product.getProductLang().getLanguageDesc(),
                        product.getProductGenre().getGenreDesc()
                ))
                .collect(Collectors.toList());
//        return Optional.ofNullable(products)
//        	    .orElse(Collections.emptyList()) // ✅ Ensures products list is never null
//        	    .stream()
//        	    .map(product -> new ProductDTO(
//        	        product.getProductName(),
//        	        product.getProductBasePrice(),
//        	        Optional.ofNullable(product.getProductLang()).map(LanguageMaster::getLanguageDesc).orElse("Unknown"),
//        	        Optional.ofNullable(product.getProductGenre()).map(GenreMaster::getGenreDesc).orElse("Unknown")
//        	    ))
//        	    .collect(Collectors.toList());


    }
}
