public class Myshelf_Table {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shelf_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer_Master customer; // Foreign Key from Customer Master

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product_Master product; // Foreign Key from Product Master

    @ManyToOne(name = "tran_type", nullable = false)
    private Invoice_table transactionType; // From Invoice Table (P=Purchase, R=Rent, L=Lent)

    @Temporal(TemporalType.DATE)
    @Column(name = "product_expiry_date")
    private Date productExpiryDate; // Only for Rent and Lent type. Null for Purchase.
     
    @Column(name = "is_active", nullable = false)
    private Boolean isActive; // Indicates if the shelf entry is active

}
