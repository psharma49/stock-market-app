package com.example.stockmarketapi.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class IpoDetails {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToOne(fetch = FetchType.LAZY)
//	@JsonIgnore
	private Company company;
	
    @ManyToMany
    @JsonIgnore
	private List<StockExchange> stockExchanges = new ArrayList<>();
	
	@Column(nullable = false)
	private Double pricePerShare;
	
	@Column(nullable = false)
	private Long totalShares;
	
	private LocalDateTime openDateTime;
	
	private String remarks;
	
	
	protected IpoDetails() {
	}
	

	public IpoDetails(double pricePerShare, Long totalShares, LocalDateTime openDateTime) {
		super();
		this.pricePerShare = pricePerShare;
		this.totalShares = totalShares;
		this.openDateTime = openDateTime;
	}
	

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public List<StockExchange> getStockExchanges() {
		return stockExchanges;
	}

	public void setStockExchanges(List<StockExchange> stockExchanges) {
		this.stockExchanges = stockExchanges;
	}

	public Double getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(Double pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public Long getTotalShares() {
		return totalShares;
	}

	public void setTotalShares(Long totalShares) {
		this.totalShares = totalShares;
	}

	public LocalDateTime getOpenDateTime() {
		return openDateTime;
	}

	public void setOpenDateTime(LocalDateTime openDateTime) {
		this.openDateTime = openDateTime;
	}

	public String getRemarks() {
		return remarks;                      
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Long getId() {
		return id;
	}
	
	

	
	
	
	
	
	

}
