package com.Project.BookWorm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Project.BookWorm.Models.ProductMaster;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@Repository
public interface ProductMasterRepository extends JpaRepository<ProductMaster, Integer>, JpaSpecificationExecutor<ProductMaster> {
    
    // Your custom queries here (like the one for productType)
    @Query("SELECT p FROM ProductMaster p JOIN FETCH p.productType WHERE p.productType.id = :typeId")
    List<ProductMaster> findByProductTypeId(@Param("typeId") int typeId);
}
