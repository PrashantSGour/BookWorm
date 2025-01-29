package com.Project.BookWorm.Repository;
import com.Project.BookWorm.Models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CustomerMasterRepository extends JpaRepository<Customer_Master, Long> {
    @Query(value = "SELECT * FROM customer_master WHERE email = ?1 AND password = ?2", nativeQuery = true)
    Optional<Customer_Master> getCustomerByEmailAndPassword(String email, String password);
}
