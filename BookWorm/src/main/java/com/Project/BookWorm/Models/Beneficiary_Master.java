package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class Beneficiary_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int benId;
    
    @Column(nullable = true,name = "ben_name")
    private String benName;

    @Column(nullable = true)
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    private String benEmail;

    @Column(nullable = true)
    @Pattern(regexp = "^[0-9]{10}$")
    private String benPhone;

    @Column(nullable = true)
    private String benBankName;

    @Column(nullable = true)
    private String benBankBranch;

    @Column(nullable = true)
    private String benBankAccNo;

    @Column(nullable = true)
    private String benIfsc;

    @Column(nullable = true)
    private String benAccType;

    @Column(nullable = true)
    private String benPan;
}