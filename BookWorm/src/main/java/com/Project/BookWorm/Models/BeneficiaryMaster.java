package com.Project.BookWorm.Models;

import javax.persistence.*;

@Entity
@Table(name = "BeneficiaryMaster")
public class BeneficiaryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Ben-Id")
    private int benId;

    @Column(name = "Ben-name")
    private String benName;

    @Column(name = "Ben-email_id")
    private String benEmailId;

    @Column(name = "Ben-contact-no")
    private String benContactNo;

    @Column(name = "Ben-bank-name")
    private String benBankName;

    @Column(name = "Ben-bank-Branch")
    private String benBankBranch;

    @Column(name = "Ben-IFSC")
    private String benIFSC;

    @Column(name = "Ben-AccNo")
    private String benAccNo;

    @Column(name = "Ben-Acc-Type")
    private String benAccType;

    @Column(name = "Ben-PAN")
    private String benPAN;

    // Getter and Setter methods
    public int getBenId() {
        return benId;
    }

    public void setBenId(int benId) {
        this.benId = benId;
    }

    public String getBenName() {
        return benName;
    }

    public void setBenName(String benName) {
        this.benName = benName;
    }

    public String getBenEmailId() {
        return benEmailId;
    }

    public void setBenEmailId(String benEmailId) {
        this.benEmailId = benEmailId;
    }

    public String getBenContactNo() {
        return benContactNo;
    }

    public void setBenContactNo(String benContactNo) {
        this.benContactNo = benContactNo;
    }

    public String getBenBankName() {
        return benBankName;
    }

    public void setBenBankName(String benBankName) {
        this.benBankName = benBankName;
    }

    public String getBenBankBranch() {
        return benBankBranch;
    }

    public void setBenBankBranch(String benBankBranch) {
        this.benBankBranch = benBankBranch;
    }

    public String getBenIFSC() {
        return benIFSC;
    }

    public void setBenIFSC(String benIFSC) {
        this.benIFSC = benIFSC;
    }

    public String getBenAccNo() {
        return benAccNo;
    }

    public void setBenAccNo(String benAccNo) {
        this.benAccNo = benAccNo;
    }

    public String getBenAccType() {
        return benAccType;
    }

    public void setBenAccType(String benAccType) {
        this.benAccType = benAccType;
    }

    public String getBenPAN() {
        return benPAN;
    }

    public void setBenPAN(String benPAN) {
        this.benPAN = benPAN;
    }

    @Override
    public String toString() {
        return "BeneficiaryMaster{" +
                "benId=" + benId +
                ", benName='" + benName + '\'' +
                ", benEmailId='" + benEmailId + '\'' +
                ", benContactNo='" + benContactNo + '\'' +
                ", benBankName='" + benBankName + '\'' +
                ", benBankBranch='" + benBankBranch + '\'' +
                ", benIFSC='" + benIFSC + '\'' +
                ", benAccNo='" + benAccNo + '\'' +
                ", benAccType='" + benAccType + '\'' +
                ", benPAN='" + benPAN + '\'' +
                '}';
    }
}
