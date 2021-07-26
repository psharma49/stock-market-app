package com.example.stockmarketapi.controller;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.CompanyStockExchange;
import com.example.stockmarketapi.entity.IpoDetails;
import com.example.stockmarketapi.entity.StockExchange;
import com.example.stockmarketapi.entity.StockPrice;
import com.example.stockmarketapi.repository.CompanyRepository;
import com.example.stockmarketapi.repository.CompanyStockExchangeRepository;
import com.example.stockmarketapi.repository.StockExchangeRepository;
import com.example.stockmarketapi.service.CompanyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	
	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	@Autowired
	private CompanyStockExchangeRepository companyStockExchangeRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@Autowired
	private EntityManager em;
	
	
	@RequestMapping(value = "/getAllCompanies", method = RequestMethod.GET)
	public List<Company> getAllCompanies()
	{
		return companyService.getAllCompanies();
	}
	
	@RequestMapping(value = "/getCompanyById/{companyId}", method = RequestMethod.GET)
	public Company getCompanyById(@PathVariable ("companyId") Long companyId)
	{
		return companyService.getCompanyById(companyId);
	}
		
	
	@RequestMapping(value = "/addNewCompany", method = RequestMethod.POST)
	public ResponseEntity<Void> addNewCompany(@RequestBody Company company)
	{
		companyService.addNewCompany(company);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	@RequestMapping(value = "/updateNewCompany", method = RequestMethod.POST)
	public ResponseEntity<Void> updateStockExchange(@RequestBody Company company)
	{
		companyService.updateNewCompany(company);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	
	@RequestMapping(value = "/getCompanyDetails/{companyName}", method = RequestMethod.GET)
	public Company getCompanyByName(@PathVariable ("companyName") String companyName)
	{
		return companyService.getByCompanyName(companyName);
	}
	
	
	@RequestMapping(value = "/getCompaniesLike/{pattern}", method = RequestMethod.GET)
	public List<Company> getMatchingCompanies(@PathVariable ("pattern") String pattern)
	{
		return companyService.getMatchingCompanies(pattern);
	}
	
	
	@RequestMapping(value = "/getIpoDetailsByCompanyName/{companyName}", method = RequestMethod.GET)
	public IpoDetails getIpoDetailsByCompanyName(@PathVariable ("companyName") String companyName)
	{
		return companyService.getIpoDetailsByCompanyName(companyName);
	}
	
	@RequestMapping(value = "/updateStockPriceOfCompany/{companyName}/{stockExchangeName}", method = RequestMethod.POST)
	public void updateStockPriceOfCompany(@RequestBody StockPrice stockPrice,@PathVariable ("companyName") String companyName,@PathVariable ("stockExchangeName") String stockExchangeName)
	{
		companyService.updateStockPriceOfCompany(stockPrice,companyName,stockExchangeName);
	}
	
	@RequestMapping(value = "/mapCompanyCode", method = RequestMethod.POST)
	public void mapcode(@RequestBody Map<String, String> text) {
		Company company = companyRepository.findByCompanyName(text.get("companyName"));
		StockExchange stockExchange = stockExchangeRepository.findByStockExchangeName(text.get("stockExchangeName"));
		CompanyStockExchange cse = new CompanyStockExchange();
		cse.setCompany(company);
		cse.setStockExchange(stockExchange);
		cse.setCompanyCode(text.get("companyCode"));
		companyStockExchangeRepository.save(cse);
	}
	
	@RequestMapping(value = "/getAllStockExchangesACompanyListedIn/{companyId}", method = RequestMethod.GET)
	public List<String> getAllStockExchangesACompanyListedIn(@PathVariable ("companyId") Long companyId)
	{
		return companyService.getAllStockExchangesACompanyListedIn(companyId);
	}
	
	
	
	
	  
	
	

}
