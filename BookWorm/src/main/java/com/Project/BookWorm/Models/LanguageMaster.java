package com.Project.BookWorm.Models;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class LanguageMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "language_id")
    private int languageId;

    @Column(nullable = true)
    private String languageDesc;

    @ManyToOne
    @JoinColumn(name = "type_id",nullable = true)
    private ProductTypeMaster typeId;
}
