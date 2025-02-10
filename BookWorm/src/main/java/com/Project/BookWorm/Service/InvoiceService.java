package com.Project.BookWorm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Project.BookWorm.Models.Invoice;
import com.Project.BookWorm.Repository.InvoiceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Optional<Invoice> getInvoiceById(int id) {
        return invoiceRepository.findById(id);
    }

    public Invoice saveInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }

    public void deleteInvoice(int id) {
        invoiceRepository.deleteById(id);
    }
}
