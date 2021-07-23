package com.example.stockmarketapi.controller;

import java.util.Date;
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
	
	@GetMapping("/getCompanyStockPrice/{companyId}/{startDate}/{endDate}")
	public List<StockPrice> findCompanyStockPriceDetails(@PathVariable ("companyId") Long companyId,
			@PathVariable ("startDate") Date startDate,
			@PathVariable ("endDate") Date endDate){
		
		return stockPriceService.findCompanyStockPriceDetails(companyId, startDate, endDate);
	}

}