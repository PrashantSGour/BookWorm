package com.Project.BookWorm.Models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerMaster {
	  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private long customerid;

    @Column(nullable = true, unique = true)
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Invalid email format")
    private String customeremail; 

    @Column(nullable = true)
    private String customername;

    @Column(nullable = true)
    private String customerpassword;

    @Column(nullable = true)
    private LocalDate dob; 

    @Column(nullable = true)
    private Integer age;

    @Column(nullable = true)
    private String pan;

    @Column(nullable = true)
    @Pattern(regexp = "^[0-9]{10}$", message = "Invalid phone number format")
    private String phonenumber;
    
    @JsonBackReference
    @OneToOne(mappedBy = "customer")
    private MyShelf myShelf; // One shelf per customer (mandatory relationship)

    public MyShelf getMyShelf() {
		return myShelf;
	}

	public void setMyShelf(MyShelf myShelf) {
		this.myShelf = myShelf;
	}

	@Override
    public String toString() {
        return "CustomerMaster [customerId=" + customerid + ", customerEmail=" + customeremail + ", customerName=" 
                + customername + ", customerPassword=" + customerpassword + ", dob=" + dob + ", age=" + age + ", pan=" 
                + pan + ", phoneNumber=" + phonenumber + "]";
    }

    public long getCustomerid() {
		return customerid;
	}

	public void setCustomerid(long customerid) {
		this.customerid = customerid;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	public String getCustomerpassword() {
		return customerpassword;
	}

	public void setCustomerpassword(String customerpassword) {
		this.customerpassword = customerpassword;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
    
}