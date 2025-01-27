package com.Project.BookWorm.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product_Type_Master 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int type_id;
    private  String type_Desc;


public Product_Type_Master ()
{

}

    public int getType_id() {
        return type_id;
    }

    public void setType_id(int type_id) {
        this.type_id = type_id;
    }

    public String getType_Desc() {
        return type_Desc;
    }

   
    public void setType_Desc(String type_Desc) {
        this.type_Desc = type_Desc;
    }
}