package com.Project.BookWorm.Models;

import jakarta.persistence.*;

@Entity
public class Genre_Master {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment primary key
    private int genreId;

    private String genreDesc; // Genre description
    private int languageId;   // Foreign key for LanguageMaster

    // Default Constructor
    public Genre_Master() {}

    // Getters and Setters
    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    public String getGenreDesc() {
        return genreDesc;
    }

    public void setGenreDesc(String genreDesc) {
        this.genreDesc = genreDesc;
    }

    public int getLanguageId() {
        return languageId;
    }

    public void setLanguageId(int languageId) {
        this.languageId = languageId;
    }
}
