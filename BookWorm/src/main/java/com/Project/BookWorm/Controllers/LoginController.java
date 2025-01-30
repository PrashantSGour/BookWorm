package com.Project.BookWorm.Controllers;

import com.Project.BookWorm.Services.CustomerMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private CustomerMasterService customerMasterService;
    

     @PostMapping("/login")
     public Map<String, Object> login(@RequestBody Map<String, String> credentials) {
         String email = credentials.get("email");
         String password = credentials.get("password");

         Map<String, Object> response = new HashMap<>();

         customerMasterService.authenticateUser(email, password).ifPresentOrElse(token -> {
             response.put("status", "success");
             response.put("message", "Login successful");
             response.put("token", token);
         }, () -> {
             response.put("status", "error");
             response.put("message", "Invalid credentials");
         });

         return response;
     }

//    @PostMapping("/login")
//public void login(@RequestBody Map<String, String> credentials) {
//    System.out.println("Login attempt with email: " + credentials.get("email"));
//    // Rest of the code...
//}

}
