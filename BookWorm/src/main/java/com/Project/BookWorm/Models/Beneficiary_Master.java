package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class Beneficiary_Master {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int benId;

    @Column(nullable=false)
    private String benName;

    @Column(nullable=false)
    private Email benEmailId;

    @Column(nullable=false)
    @Pattern(regexp="^[0-9]{10}$")
    private String benContactNo;

    @Column(nullable=false)
    private String benBankName;

    @Column(nullable=false)
    private String benBankBranch;

    @Column(nullable=false)
    private String benIFSC;

    @Column(nullable=false)
    private String benAccNo;

    @Column(nullable=false)
    private String benAccType;

    @Column(nullable=false)
    private String benPAN;

}
