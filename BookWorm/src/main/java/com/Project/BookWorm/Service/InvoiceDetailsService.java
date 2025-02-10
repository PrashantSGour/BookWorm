package com.Project.BookWorm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Project.BookWorm.Models.InvoiceDetails;
import com.Project.BookWorm.Repository.InvoiceDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceDetailsService {

    @Autowired
    private InvoiceDetailsRepository invoiceDetailsRepository;

    public List<InvoiceDetails> getAllInvoiceDetails() {
        return invoiceDetailsRepository.findAll();
    }

    public Optional<InvoiceDetails> getInvoiceDetailById(int id) {
        return invoiceDetailsRepository.findById(id);
    }

    public InvoiceDetails saveInvoiceDetail(InvoiceDetails invoiceDetail) {
        return invoiceDetailsRepository.save(invoiceDetail);
    }

    public void deleteInvoiceDetail(int id) {
        invoiceDetailsRepository.deleteById(id);
    }
}
