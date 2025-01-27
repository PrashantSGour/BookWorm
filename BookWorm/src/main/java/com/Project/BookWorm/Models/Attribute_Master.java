package com.Project.BookWorm.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Attribute_Master {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int Attribute_Id;
    
    private String Desc;


    public Attribute_Master(){
        
    }

    
    public int getAttribute_Id() {
        return Attribute_Id;
    }

    public void setAttribute_Id(int attribute_Id) {
        Attribute_Id = attribute_Id;
    }

    public String getDesc() {
        return Desc;
    }

    public void setDesc(String desc) {
        Desc = desc;
    }
}
