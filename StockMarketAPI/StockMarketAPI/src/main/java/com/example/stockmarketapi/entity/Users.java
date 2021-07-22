package com.example.stockmarketapi.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {
	
	@Id
    @GeneratedValue
	private long id;
	
	private String name;
	
	private String password;
	
	private String email;
	
	private Boolean Confirmed;
	
	private Boolean Admin;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getConfirmed() {
		return Confirmed;
	}

	public void setConfirmed(Boolean confirmed) {
		Confirmed = confirmed;
	}

	public Boolean getAdmin() {
		return Admin;
	}

	public void setAdmin(Boolean admin) {
		Admin = admin;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	public long getId() {
		return id;
	}

	private String Role;


}
