public class Product_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name", nullable = false, length = 255)
    private String productName;

    @Column(name = "product_english_name", nullable = false, length = 255)
    private String productEnglishName;

    @ManyToOne
    @JoinColumn(name = "product_type", nullable = false)
    private Product_TypeMaster productType;

    @Column(name = "product_baseprice", nullable = false)
    private Double productBasePrice;

    @Column(name = "product_sp_cost")
    private Double productSpCost;

    @Column(name = "product_offerprice")
    private Double productOfferPrice;

    @Column(name = "product_off_price_expirydate")
    private String productOffPriceExpiryDate;

    @Column(name = "product_description_short")
    private String productDescriptionShort;

    @Column(name = "product_description_long")
    private String productDescriptionLong;

    @Column(name = "product_isbn")
    private String productIsbn;

    @Column(name = "product_author")
    private String productAuthor;

    @ManyToOne
    @JoinColumn(name = "product_publisher")
    private Publisher_Master publisher;

    @ManyToOne
    @JoinColumn(name = "product_lang")
    private Language_Master productLanguage;

    @ManyToOne
    @JoinColumn(name = "product_genre")
    private Genre_Master productGenre;

    @Column(name = "is_rentable")
    private Boolean isRentable;

    @Column(name = "is_library")
    private Boolean isLibrary;

    @Column(name = "rent_per_day")
    private Double rentPerDay;

    @Column(name = "min_rent_days")
    private Integer minRentDays;
}

