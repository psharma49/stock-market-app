package com.example.stockmarketapi.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.example.stockmarketapi.entity.StockExchange;
import com.example.stockmarketapi.service.StockExchangeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StockExchangeController {
	
	
	@Autowired
	private StockExchangeService stockExchangeService; 

	@RequestMapping(value = "/getStockExchangeList", method = RequestMethod.GET)
	public List<StockExchange> getStockExchangeList()
	{
		return stockExchangeService.getStockExchangeList();
	}
	
	@RequestMapping(value = "/addStockExchange", method = RequestMethod.POST)
	public ResponseEntity<Void> addStockExchange(@RequestBody StockExchange stockExchange)
	{
		stockExchangeService.addStockExchange(stockExchange);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	@RequestMapping(value = "/updateStockExchange", method = RequestMethod.POST)
	public ResponseEntity<Void> updateStockExchange(@RequestBody StockExchange stockExchange)
	{
		stockExchangeService.updateStockExchange(stockExchange);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	@RequestMapping(value = "/getStockExchangeById/{id}", method = RequestMethod.GET)
	public StockExchange  getStockExchangeById(@PathVariable ("id") Long id)
	{
		return stockExchangeService.getStockExchangeById(id);
	}
	
	
	@RequestMapping(value = "/getStockExchangeByName/{stockExchangeName}", method = RequestMethod.GET)
	public StockExchange getCompanyByName(@PathVariable ("stockExchangeName") String stockExchangeName)
	{
		return stockExchangeService.getStockExchangeByName(stockExchangeName);
	}
	
	@RequestMapping(value = "/getCompanyListInAStockExchange/{id}", method = RequestMethod.GET)
	public List<Company> getCompanyListInAStockExchange(@PathVariable ("id") Long id)
	{
		return stockExchangeService.getCompanyListInAStockExchange(id);
	}
	
	
	
	
	
	

}
