package com.Project.BookWorm.Repository;

import com.Project.BookWorm.Models.CustomerMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CustomerMasterRepository extends JpaRepository<CustomerMaster, Long> {

    @Query(value = "SELECT * FROM customer_master WHERE customeremail = ?1 AND customerpassword = ?2", nativeQuery = true)
    Optional<CustomerMaster> getCustomerByEmailAndPassword(String customeremail, String customerpassword);

    Optional<CustomerMaster> findById(Long id);  // Use findById for single ID lookup

    Optional<CustomerMaster> findByCustomeremail(String customeremail);
}
