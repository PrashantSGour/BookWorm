﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BookWorm_Dotnet.Models;

[Table("beneficiary_master")]
public partial class BeneficiaryMaster
{
    [Key]
    [Column("ben_id")]
    public int BenId { get; set; }

    [Column("ben_acc_type")]
    [StringLength(255)]
    public string? BenAccType { get; set; }

    [Column("ben_bank_acc_no")]
    [StringLength(255)]
    public string? BenBankAccNo { get; set; }

    [Column("ben_bank_branch")]
    [StringLength(255)]
    public string? BenBankBranch { get; set; }

    [Column("ben_bank_name")]
    [StringLength(255)]
    public string? BenBankName { get; set; }

    [Column("ben_email")]
    [StringLength(255)]
    public string? BenEmail { get; set; }

    [Column("ben_ifsc")]
    [StringLength(255)]
    public string? BenIfsc { get; set; }

    [Column("ben_name")]
    [StringLength(255)]
    public string? BenName { get; set; }

    [Column("ben_pan")]
    [StringLength(255)]
    public string? BenPan { get; set; }

    [Column("ben_phone")]
    [StringLength(255)]
    public string? BenPhone { get; set; }

    [InverseProperty("Beneficiary")]
    public virtual ICollection<ProductBeneficiary> ProductBeneficiaries { get; set; } 

    [InverseProperty("Beneficiary")]
    public virtual ICollection<RoyaltyCalculation> RoyaltyCalculations { get; set; } 
}
