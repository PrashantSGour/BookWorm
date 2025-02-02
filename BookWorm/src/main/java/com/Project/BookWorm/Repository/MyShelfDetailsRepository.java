package com.Project.BookWorm.Repository;

import com.Project.BookWorm.Models.MyShelfDetails;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyShelfDetailsRepository extends JpaRepository<MyShelfDetails, Integer> {

    // Get all books in a specific shelf (by shelfId):
    List<MyShelfDetails> findByShelfIdShelfId(Integer shelfId);

    // Custom query to find by productId
    List<MyShelfDetails> findByProductIdProductId(Integer productId);

    // Optional: Retrieve the latest addition to a shelf (by expiryDate):
    List<MyShelfDetails> findTopByShelfIdShelfIdOrderByExpiryDateDesc(Integer shelfId);
}
