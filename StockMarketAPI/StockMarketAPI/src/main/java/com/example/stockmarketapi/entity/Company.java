package com.example.stockmarketapi.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Company {
	
	
	public Company() {
		super();
	}
	
	
	public Company(String companyName, Double turnover, String ceo, String boardOfDirectors, String companyBrief) {
		super();
		this.companyName = companyName;
		this.turnover = turnover;
		this.ceo = ceo;
		this.boardOfDirectors = boardOfDirectors;
		this.companyBrief = companyBrief;
	}

	@Id
	@GeneratedValue
	private Long companyId;
	
	
	@Column(nullable = false)
	private String companyName;


	@Column(nullable = false)
	private Double turnover;

	
	@Column(nullable = false)
	@OneToMany(targetEntity = CompanyStockExchange.class,mappedBy="company")
	@JsonIgnore
	private List<CompanyStockExchange> companyStockExchange;
	
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "company", cascade = CascadeType.REMOVE)
	@JsonIgnore
	private IpoDetails ipoDetails;
	
	
	@OneToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL,mappedBy="company")
	@JsonIgnore
	private List<StockPrice> stockPrice;
	
	private String ceo;
	
	@Column(nullable = false,columnDefinition="TEXT")
	private String boardOfDirectors;
	
	
	@Column(nullable = false,columnDefinition="TEXT")
	private String companyBrief;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Sector sector;
	
	@Column(nullable = false)
	private String sectorName;


	public String getSectorName() {
		return sectorName;
	}
	

	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}


	public IpoDetails getIpoDetails() {
		return ipoDetails;
	}


	public void setIpoDetails(IpoDetails ipoDetails) {
		this.ipoDetails = ipoDetails;
	}


	public Long getCompanyId() {
		return companyId;
	}


	public List<StockPrice> getStockPrice() {
		return stockPrice;
	}


	public void setStockPrice(List<StockPrice> stockPrice) {
		this.stockPrice = stockPrice;
	}


	public Sector getSector() {
		return sector;
	}


	public void setSector(Sector sector) {
		this.sector = sector;
	}



	public Long getId() {
		return companyId;
	}
	

	public List<CompanyStockExchange> getCompanyStockExchange() {
		return companyStockExchange;
	}


	public void setCompanyStockExchange(List<CompanyStockExchange> companyStockExchange) {
		this.companyStockExchange = companyStockExchange;
	}


	public String getCompanyName() {
		return companyName;
	}


	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	
	
	public Double getTurnover() {
		return turnover;
	}


	public void setTurnover(Double turnover) {
		this.turnover = turnover;
	}


	public String getCeo() {
		return ceo;
	}


	public void setCeo(String ceo) {
		this.ceo = ceo;
	}


	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}


	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}


	public String getCompanyBrief() {
		return companyBrief;
	}


	public void setCompanyBrief(String companyBrief) {
		this.companyBrief = companyBrief;
	}


	

	
	

}
