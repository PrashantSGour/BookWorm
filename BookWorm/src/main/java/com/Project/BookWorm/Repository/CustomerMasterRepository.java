package com.Project.BookWorm.Repository;
import com.Project.BookWorm.Models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CustomerMasterRepository extends JpaRepository<CustomerMaster, Long> {
    @Query(value = "SELECT * FROM customer_master WHERE Customer_email = ?1 AND Customer_password = ?2", nativeQuery = true)
    Optional<CustomerMaster> getCustomerByEmailAndPassword(String email, String password);
}
