package com.Project.BookWorm.Models;


import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;

    @Column(nullable = true)
    private String productName;

    @Column(nullable = true)
    private String productEnglishName;

    @ManyToOne
    @JoinColumn(name = "type_id",nullable = true,referencedColumnName = "type_id")
    private ProductTypeMaster productType; 

    @Column(nullable = true)
    private double productBasePrice;

    @Column(nullable = true)
    private double productSpCost;

    @Column(nullable = true)
    private double productOfferPrice;
    
    @Column(nullable = true)
    private LocalDate productOffPriceExpiryDate;
    
    @Column(nullable = true)
    private String productDescriptionShort;

    @Column(nullable = true)
    private String productDescriptionLong;

    @Column(nullable = true)
    private String productIsbn;

    @Column(nullable = true)
    private String productAuthor;

    @ManyToOne
    @JoinColumn(name = "language_id",nullable = true)
    private LanguageMaster productLang; 

    @ManyToOne
    @JoinColumn(name = "genre_id",nullable = true)
    private GenreMaster productGenre;

    @Column(nullable = true)
    private boolean isRentable; // Y/N
    
    @Column(nullable = true )
    private double rentPerDay;

    @Column(nullable = true , columnDefinition = "int default 3") 
    private int minRentDays;
}
