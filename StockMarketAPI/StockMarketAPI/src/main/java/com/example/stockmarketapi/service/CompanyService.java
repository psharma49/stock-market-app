package com.example.stockmarketapi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.CompanyStockExchange;
import com.example.stockmarketapi.entity.IpoDetails;
import com.example.stockmarketapi.entity.Sector;
import com.example.stockmarketapi.entity.StockExchange;
import com.example.stockmarketapi.entity.StockPrice;
import com.example.stockmarketapi.repository.CompanyRepository;
import com.example.stockmarketapi.repository.CompanyStockExchangeRepository;
import com.example.stockmarketapi.repository.SectorRepository;
import com.example.stockmarketapi.repository.StockExchangeRepository;
import com.example.stockmarketapi.repository.StockPriceRepository;

@Service
public class CompanyService {
	
	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	@Autowired
	private SectorRepository sectorRepository;
	
	@Autowired
	private CompanyStockExchangeRepository companyStockExchangeRepository;

	
	public List <Company> getAllCompanies() {
		return companyRepository.findAll();
	}
	
	public Company getCompanyById(Long companyId) 
	{
		return companyRepository.findById(companyId).get();
	}

	public void addNewCompany(Company company) 
	{
		Sector sector = sectorRepository.findBySectorName(company.getSectorName());
		company.setSector(sector);
		companyRepository.save(company);
	}


	public void updateNewCompany(Company company) 
	{
		Company cmp = companyRepository.findById(company.getCompanyId()).get();
		cmp.setBoardOfDirectors(company.getBoardOfDirectors());
		cmp.setCompanyName(company.getCompanyName());
		cmp.setCeo(company.getCeo());
		cmp.setCompanyBrief(company.getCompanyBrief());
		cmp.setCompanyName(company.getCompanyName());
		cmp.setSectorName(company.getSectorName());
		cmp.setTurnover(company.getTurnover());
		Sector sector = sectorRepository.findBySectorName(company.getSectorName());
		cmp.setSector(sector);
		companyRepository.save(cmp);
	}


	public Company getByCompanyName(String companyName) 
	{
		return companyRepository.findByCompanyName(companyName);
	}


	public List<Company> getMatchingCompanies(String pattern) {
		return companyRepository.findByCompanyNameStartingWith(pattern);
	}
	
	
	public IpoDetails getIpoDetailsByCompanyName(String companyName) {
		Company company = companyRepository.findByCompanyName(companyName);
		return company.getIpoDetails();
	}


	public void updateStockPriceOfCompany(StockPrice stockPrice, String companyName, String stockExchangeName) {
		Company company = companyRepository.findByCompanyName(companyName);
		StockExchange stockExchange = stockExchangeRepository.findByStockExchangeName(stockExchangeName);
		CompanyStockExchange companyStockExchange  =  companyStockExchangeRepository.findByCompanyAndStockExchange(company,stockExchange);
		stockPrice.setCompanyCode(companyStockExchange.getCompanyCode());
		stockPriceRepository.save(stockPrice);	
	}

	public List<String> getAllStockExchangesACompanyListedIn(Long companyId) {
		Company company = companyRepository.findById(companyId).get();
		List<CompanyStockExchange> companyStockExchange = company.getCompanyStockExchange();
//		List<String> stockExchangeNamesList = new ArrayList<> ();
		List<String> stockExchangeNamesList = companyStockExchange.stream().
				map(x -> x.getStockExchange().getstockExchangeName()).collect(Collectors.toList());
		return stockExchangeNamesList;
	}

	
	
	
	

	
	
	
	
	

}
