package com.Project.BookWorm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Project.BookWorm.Models.CartDetails;

public interface CartDetailsRepository extends JpaRepository<CartDetails, Integer> {
}

