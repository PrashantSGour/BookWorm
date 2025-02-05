package com.Project.BookWorm.Controller;

import com.Project.BookWorm.Models.ProductMaster;
import com.Project.BookWorm.Service.ProductMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
import com.Project.BookWorm.dto.ProductDTO;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductMasterController {

    @Autowired
    private ProductMasterService productMasterService;

    // Endpoint to fetch a single product by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductMaster> getProductById(@PathVariable("id") int productId) {
        Optional<ProductMaster> productMaster = productMasterService.getProductById(productId);
        if (productMaster.isPresent()) {
            return new ResponseEntity<>(productMaster.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to create a new product
    @PostMapping
    public ResponseEntity<ProductMaster> createProduct(@RequestBody ProductMaster productMaster) {
        ProductMaster createdProduct = productMasterService.createProduct(productMaster);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    // Endpoint to update an existing product
    @PutMapping("/{id}")
    public ResponseEntity<ProductMaster> updateProduct(@PathVariable("id") int productId, @RequestBody ProductMaster productMaster) {
        try {
            ProductMaster updatedProduct = productMasterService.updateProduct(productId, productMaster);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") int productId) {
        try {
            productMasterService.deleteProduct(productId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to fetch all products (optional)
    // @GetMapping
    // public ResponseEntity<Iterable<ProductMaster>> getAllProducts() {
    //     return ResponseEntity.ok(productMasterService.getAllProducts());
    // }
    // @GetMapping("/fromlanguage/{id}")
    // public List<ProductMaster>getBylangauge(@PathVariable int id){
    //     return List<productMasterService.getByLanguageId(id)>;
    // }
    // @GetMapping("/filter")
    // public List<ProductMaster> filterProducts(
    //         @RequestParam(required = false) int genreId,
    //         @RequestParam(required = false) int languageId) {
    //     return productService.getFilteredProducts(genreId, languageId);
    // }
    @GetMapping("/filter")
    public List<ProductDTO> filterProducts(
            @RequestParam(required = false) String genreDesc,
            @RequestParam(required = false) String languageDesc) {
        return productMasterService.getFilteredProducts(genreDesc, languageDesc);
    }
    
}
