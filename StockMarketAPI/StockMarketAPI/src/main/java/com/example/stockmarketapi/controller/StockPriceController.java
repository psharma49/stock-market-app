package com.example.stockmarketapi.controller;

import java.sql.Date;
import java.util.List;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockmarketapi.entity.StockPrice;
import com.example.stockmarketapi.service.StockPriceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StockPriceController {
	
	
	@Autowired
	private StockPriceService stockPriceService;
	
	@GetMapping("/getCompanyStockPrice/{companyName}/{startDate}/{endDate}/{stockExchangeName}")
	public List<StockPrice> findCompanyStockPriceDetails(@PathVariable ("companyName") String companyName,
			@PathVariable ("startDate") Date startDate,
			@PathVariable ("endDate") Date endDate,
			@PathVariable ("stockExchangeName") String stockExchangeName){
		
		return stockPriceService.findCompanyStockPriceDetails(companyName, startDate, endDate,stockExchangeName);
	}

}
