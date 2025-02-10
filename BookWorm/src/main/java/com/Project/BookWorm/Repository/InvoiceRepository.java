package com.Project.BookWorm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Project.BookWorm.Models.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
}
