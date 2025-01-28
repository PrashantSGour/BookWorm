package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Genre_Master {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment primary key
    private int genreId;
    
	@Column(nullable=false)
    private String genreDesc; // Genre description
	
	@ManyToOne(targetEntity=Language_Master.class)
	@Column(nullable=false)
    private int languageId;   // Foreign key for LanguageMaster

    // Default Constructor
}
