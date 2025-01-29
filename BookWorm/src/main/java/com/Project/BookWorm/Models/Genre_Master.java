package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Genre_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "genre_id")
    private int genreId;

    @Column(nullable = true)
    private String genreDesc;

    @ManyToOne
    @JoinColumn(name = "language_id",nullable = true)
    private Language_Master languageId;
}
