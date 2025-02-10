package com.Project.BookWorm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Project.BookWorm.Models.Invoice;
import com.Project.BookWorm.Service.InvoiceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping
    public List<Invoice> getAllInvoices() {
        return invoiceService.getAllInvoices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getInvoiceById(@PathVariable int id) {
        Optional<Invoice> invoice = invoiceService.getInvoiceById(id);
        return invoice.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Invoice createInvoice(@RequestBody Invoice invoice) {
        return invoiceService.saveInvoice(invoice);
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvoice(@PathVariable int id) {
        invoiceService.deleteInvoice(id);
        return ResponseEntity.noContent().build();
    }
}
