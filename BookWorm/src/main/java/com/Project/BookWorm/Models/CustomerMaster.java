package com.Project.BookWorm.Models;

import java.time.LocalDate;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerMaster {

    private static final Logger logger = LogManager.getLogger(CustomerMaster.class);

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
    private MyShelf myShelf;

    public CustomerMaster() {
        logger.info("CustomerMaster object created");
    }

    public long getCustomerid() {
        logger.debug("Getting customer ID: " + customerid);
        return customerid;
    }

    public void setCustomerid(long customerid) {
        logger.info("Setting customer ID: " + customerid);
        this.customerid = customerid;
    }

    public String getCustomeremail() {
        return customeremail;
    }

    public void setCustomeremail(String customeremail) {
        try {
            if (customeremail == null || !customeremail.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
                throw new IllegalArgumentException("Invalid email format");
            }
            logger.info("Setting customer email: " + customeremail);
            this.customeremail = customeremail;
        } catch (Exception e) {
            logger.error("Error setting customer email: " + e.getMessage());
        }
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        try {
            if (customername == null || customername.trim().isEmpty()) {
                throw new IllegalArgumentException("Customer name cannot be empty");
            }
            logger.info("Setting customer name: " + customername);
            this.customername = customername;
        } catch (Exception e) {
            logger.error("Error setting customer name: " + e.getMessage());
        }
    }

    public String getCustomerpassword() {
        return customerpassword;
    }

    public void setCustomerpassword(String customerpassword) {
        try {
            if (customerpassword == null || customerpassword.length() < 6) {
                throw new IllegalArgumentException("Password must be at least 6 characters long");
            }
            logger.warn("Setting customer password - sensitive information should be handled securely!");
            this.customerpassword = customerpassword;
        } catch (Exception e) {
            logger.error("Error setting customer password: " + e.getMessage());
        }
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        try {
            if (dob == null || dob.isAfter(LocalDate.now())) {
                throw new IllegalArgumentException("Invalid date of birth");
            }
            logger.info("Setting DOB: " + dob);
            this.dob = dob;
        } catch (Exception e) {
            logger.error("Error setting DOB: " + e.getMessage());
        }
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        try {
            if (age == null || age < 0 || age > 120) {
                throw new IllegalArgumentException("Invalid age");
            }
            logger.info("Setting Age: " + age);
            this.age = age;
        } catch (Exception e) {
            logger.error("Error setting age: " + e.getMessage());
        }
    }

    public String getPan() {
        return pan;
    }

    public void setPan(String pan) {
        try {
            if (pan == null || pan.length() != 10) {
                throw new IllegalArgumentException("Invalid PAN format");
            }
            logger.info("Setting PAN: " + pan);
            this.pan = pan;
        } catch (Exception e) {
            logger.error("Error setting PAN: " + e.getMessage());
        }
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        try {
            if (phonenumber == null || !phonenumber.matches("^[0-9]{10}$")) {
                throw new IllegalArgumentException("Invalid phone number format");
            }
            logger.info("Setting phone number: " + phonenumber);
            this.phonenumber = phonenumber;
        } catch (Exception e) {
            logger.error("Error setting phone number: " + e.getMessage());
        }
    }

    public MyShelf getMyShelf() {
        return myShelf;
    }

    public void setMyShelf(MyShelf myShelf) {
        try {
            if (myShelf == null) {
                throw new IllegalArgumentException("MyShelf reference cannot be null");
            }
            logger.info("Setting MyShelf reference");
            this.myShelf = myShelf;
        } catch (Exception e) {
            logger.error("Error setting MyShelf reference: " + e.getMessage());
        }
    }

    @Override
    public String toString() {
        return "CustomerMaster [customerId=" + customerid + ", customerEmail=" + customeremail +
                ", customerName=" + customername + ", dob=" + dob + ", age=" + age + ", pan=" + pan +
                ", phoneNumber=" + phonenumber + "]";
    }
}
