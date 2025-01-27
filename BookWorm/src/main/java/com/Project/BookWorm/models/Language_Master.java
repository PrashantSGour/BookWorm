package com.Project.BookWorm.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Language_Master {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int Language_Id;
private String Language_Desc;
private int Type_Id;
}

public Language_Master()
{

}
public int getLanguage_Id() {
    return Language_Id;
}

public String getLanguage_Desc() {
    return Language_Desc;
}

public int getType_Id() {
    return Type_Id;
}

public void setLanguage_Desc(String language_Desc) {
    Language_Desc = language_Desc;
}

public void setLanguage_Id(int language_Id) {
    Language_Id = language_Id;
}

public void setType_Id(int type_Id) {
    Type_Id = type_Id;
}