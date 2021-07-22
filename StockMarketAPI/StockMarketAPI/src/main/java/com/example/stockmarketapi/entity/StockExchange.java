package com.example.stockmarketapi.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class StockExchange {

	@Id
	@GeneratedValue
	private long id;

	private String stockExchangeName;

	private String brief;

	private String contactAddress;

	private String remarks;
	
	@OneToMany(targetEntity = CompanyStockExchange.class,mappedBy = "stockExchange")
	@JsonIgnore
	private List<CompanyStockExchange> compstockmap;
	
	
	@ManyToMany(targetEntity = IpoDetails.class,mappedBy = "stockExchanges")
	@JsonIgnore
	private List<IpoDetails> ipoDetails = new ArrayList<> ();
	
	
	public List<IpoDetails> getIpoDetails() {
		return ipoDetails;
	}

	public void setIpoDetails(List<IpoDetails> ipoDetails) {
		this.ipoDetails = ipoDetails;
	}

	public String getstockExchangeName() {
		return stockExchangeName;
	}


	public void setstockExchangeName(String stockExchangeName) {
		this.stockExchangeName = stockExchangeName;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getContactAddress() {
		return contactAddress;
	}

	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public List<CompanyStockExchange> getCompstockmap() {
		return compstockmap;
	}

	public void setCompstockmap(List<CompanyStockExchange> compstockmap) {
		this.compstockmap = compstockmap;
	}

	public long getId() {
		return id;
	}

}
