using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BookWorm_Dotnet.Models;

[Table("customer_master")]
[Index("Customeremail", Name = "UK8g722plphbq8gh7lih8ua6ada", IsUnique = true)]
public partial class CustomerMaster
{
    [Key]
    [Column("customer_id")]
    public long CustomerId { get; set; }

    [Column("age")]
    public int? Age { get; set; }

    [Column("customeremail")]
    public string? Customeremail { get; set; }

    [Column("customername")]
    [StringLength(255)]
    public string? Customername { get; set; }

    [Column("customerpassword")]
    [StringLength(255)]
    public string? Customerpassword { get; set; }

    [Column("dob")]
    public DateOnly? Dob { get; set; }

    [Column("pan")]
    [StringLength(255)]
    public string? Pan { get; set; }

    [Column("phonenumber")]
    [StringLength(255)]
    public string? Phonenumber { get; set; }

    [InverseProperty("Customer")]
    public virtual ICollection<CartMaster> CartMasters { get; set; } = new List<CartMaster>();

    [InverseProperty("Customer")]
    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    [InverseProperty("Customer")]
    public virtual MyShelf? MyShelf { get; set; }

    [InverseProperty("Customer")]
    public virtual ICollection<RentDetail> RentDetails { get; set; } = new List<RentDetail>();
}
