package com.example.stockmarketapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockmarketapi.entity.StockPrice;
import com.example.stockmarketapi.service.StockPriceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UploadExcelController {
	
	@Autowired
	private StockPriceService stockPriceService;
	
	@RequestMapping(value = "/uploadStockPriceExcel", method = RequestMethod.POST)
	public ResponseEntity<Void> uploadStockPriceExcel(@RequestBody  List<List<Object>> stockPriceList)
	{
		stockPriceService.uploadStockPriceExcel(stockPriceList);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

}
