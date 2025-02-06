//package com.Project.BookWorm.Service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//    @Autowired
//    private JavaMailSender mailSender;
//
//    public void sendOtpEmail(String to, String otp) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(to);
//        message.setSubject("Your OTP for BookWorm Registration");
//        message.setText("Your OTP is: " + otp + "\nIt is valid for 5 minutes.");
//        mailSender.send(message);
//    }
//}
//
//
