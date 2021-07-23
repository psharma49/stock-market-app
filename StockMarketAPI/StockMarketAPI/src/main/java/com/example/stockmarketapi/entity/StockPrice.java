package com.example.stockmarketapi.entity;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class StockPrice {
	
	
	@Id
	@GeneratedValue
	private long id;
	
	private String exchangeName;
	
	private String companyCode;
	
	private float sharePrice;
	
	private LocalDateTime localDateTime;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Company company;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern="yyyy-MM-dd")
	private Date datee;
	
	
	private Time timee;
	
	public StockPrice() {
		super();

	}
	
	public StockPrice( String exchangeName, String companyCode,  
			Date datee, Time timee, float sharePrice) {
		super();
	
		this.exchangeName = exchangeName;
		this.companyCode = companyCode;
		this.datee = datee;
		this.timee= timee;
		this.sharePrice = sharePrice;
	}

	
	public String getExchangeName() {
		return exchangeName;
	}

	public void setExchangeName(String exchangeName) {
		this.exchangeName = exchangeName;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public LocalDateTime getLocalDateTime() {
		return localDateTime;
	}

	public void setLocalDateTime(LocalDateTime localDateTime) {
		this.localDateTime = localDateTime;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Date getDatee() {
		return datee;
	}

	public void setDatee(Date datee) {
		this.datee = datee;
	}

	public Time getTimee() {
		return timee;
	}

	public void setTimee(Time timee) {
		this.timee = timee;
	}

	public float getSharePrice() {
		return sharePrice;
	}

	public void setSharePrice(float sharePrice) {
		this.sharePrice = sharePrice;
	}

	public long getId() {
		return id;
	}



}
