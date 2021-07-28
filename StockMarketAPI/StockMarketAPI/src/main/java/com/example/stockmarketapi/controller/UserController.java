package com.example.stockmarketapi.controller;

import java.util.Optional;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockmarketapi.entity.Users;
import com.example.stockmarketapi.repository.UsersRepository;
import com.example.stockmarketapi.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private UserService userService;
	

	@RequestMapping(value = "/setuserapi", method = RequestMethod.POST)
	public ResponseEntity<Void> Stringreactuserapi(@RequestBody Users user) throws AddressException, MessagingException {

		Users userSaved = usersRepository.save(user);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Responded", "UserController");
		headers.add("Access-Control-Allow-Origin", "*");
		sendemail(user.getId());
		Users user1 = usersRepository.getById(user.getId());
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	public void sendemail(Long userid) throws AddressException, MessagingException {

		Users user = usersRepository.getById(userid);

		final String username = "pulkitsharma491998@gmail.com";
		final String password = "triggerx49";

		Properties prop = new Properties();
		
		prop.put("mail.smtp.host", "smtp.gmail.com");
		prop.put("mail.smtp.port", "465");
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.starttls.enable", "true");
		prop.put("mail.smtp.starttls.required", "true");
		prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
		prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

		Session session = Session.getInstance(prop, new javax.mail.Authenticator() {
			protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
				return new javax.mail.PasswordAuthentication(username, password);
			}
		});

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("pulkitsharma491998@gmail.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(user.getEmail()));
			message.setSubject("USer confirmation email");
			message.setContent(
					"<h1><a href =\"http://127.0.0.1:8080/confirmuser/" + userid + "/\"> Click to confirm </a></h1>",
					"text/html");
			Transport.send(message);
			System.out.println("Done");

		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/confirmuser/{userid}", method = RequestMethod.GET)
	public String welcomepage(@PathVariable Long userid) {
		Optional<Users> userlist = usersRepository.findById(userid);
		Users usr = new Users();
		usr = usersRepository.getById(userid);
		usr.setConfirmed(true);
		
		usersRepository.save(usr);
		return "User confirmed" + usr.getName();
	}
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Void> loginUser(@RequestBody Users user) throws AddressException, MessagingException {
		
		if(userService.checkUser(user))
		{
			return ResponseEntity.status(HttpStatus.OK).build();
		}
		else
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
        
	}
	
	


	
	

}
