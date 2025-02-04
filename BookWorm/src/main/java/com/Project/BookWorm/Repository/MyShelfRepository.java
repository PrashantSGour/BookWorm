package com.Project.BookWorm.Repository;

import com.Project.BookWorm.Models.CustomerMaster;
import com.Project.BookWorm.Models.MyShelf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MyShelfRepository extends JpaRepository<MyShelf, Integer> {

	@Query("SELECT m FROM MyShelf m WHERE m.customer.id = :customerId")
	public MyShelf findByCustomerId(@Param("customerId") Integer customerId);


}
