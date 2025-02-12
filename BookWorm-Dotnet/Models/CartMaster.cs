using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BookWorm_Dotnet.Models;

[Table("cart_master")]
[Index("CustomerId", Name = "FK44sbajofqx6cngygmmwui5igc")]
public partial class CartMaster
{
    [Key]
    [Column("cart_id")]
    public int CartId { get; set; }

    [Column("cost")]
    public double? Cost { get; set; }

    [Column("is_active", TypeName = "bit(1)")]
    public ulong IsActive { get; set; }

    [Column("customer_id")]
    public long? CustomerId { get; set; }

    [InverseProperty("Cart")]
    public virtual ICollection<CartDetail> CartDetails { get; set; }

    [ForeignKey("CustomerId")]
    [InverseProperty("CartMasters")]
    public virtual CustomerMaster? Customer { get; set; }

    [InverseProperty("Cart")]
    public virtual ICollection<Invoice> Invoices { get; set; }
}
