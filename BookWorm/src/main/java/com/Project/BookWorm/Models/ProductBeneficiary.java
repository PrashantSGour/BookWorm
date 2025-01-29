package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductBeneficiary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_beneficiary_id")
    private int beneficiaryId;
    @ManyToOne()
    @JoinColumn(name = "beneficiary_id",  nullable = true)
    private BeneficiaryMaster beneficiaryMaster;

    @ManyToOne()
    @JoinColumn(name = "product_id",  nullable = true)
    private ProductMaster productMaster;

    @Column(nullable = true,name = "percentage")
    private double percentage;
}
