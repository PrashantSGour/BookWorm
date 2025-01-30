package com.Project.BookWorm.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MyShelf {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shelf_id")
    private int shelfId;

    private int noOfBooks;


    @ManyToOne
    @JoinColumn(name = "shelf_dtl_id", nullable = true)
    private ShelfDetails shelfDetails;
    //this a new comment
}
