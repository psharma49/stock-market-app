package com.example.stockmarketapi.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.SystemMenuBar;

import java.sql.Date;
import java.sql.Time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.CompanyStockExchange;
import com.example.stockmarketapi.entity.StockPrice;
import com.example.stockmarketapi.repository.CompanyRepository;
import com.example.stockmarketapi.repository.CompanyStockExchangeRepository;
import com.example.stockmarketapi.repository.StockPriceRepository;

@Service
public class StockPriceService {

	@Autowired
	private StockPriceRepository stockPriceRepository;

	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private CompanyStockExchangeRepository companyStockExchangeRepository;

	public void uploadStockPriceExcel(List<List<Object>> stockPriceList) {
		
		System.out.println("asdasdasdasdasdasdasdasdasdasdas");
		System.out.println(Date.valueOf("2019-04-08"));
		for(int i=1; i<stockPriceList.size(); i++)
		{
			System.out.println(stockPriceList.size());
			StockPrice newStockPrice = new StockPrice();
			if(stockPriceList.get(i).isEmpty())
			{
				break;
			}
			newStockPrice.setCompanyCode(stockPriceList.get(i).get(0).toString());    
			newStockPrice.setExchangeName(stockPriceList.get(i).get(1).toString());    
			newStockPrice.setSharePrice((Double.valueOf(stockPriceList.get(i).get(2).toString())).floatValue()); 
			String dateee = stockPriceList.get(i).get(3).toString().trim();
			StringBuilder temp = new StringBuilder(dateee);
			temp.setCharAt(4, '-');
			temp.setCharAt(7, '-');
			newStockPrice.setDatee(Date.valueOf(temp.toString()));    
			newStockPrice.setTimee(Time.valueOf(stockPriceList.get(i).get(4).toString().trim()));    
			CompanyStockExchange companyStockExchange = companyStockExchangeRepository.findByCompanyCode(stockPriceList.get(i).get(0).toString());
			Company company = companyStockExchange.getCompany();
			newStockPrice.setCompany(company);
			stockPriceRepository.save(newStockPrice);
		}
		
	}

	public List<StockPrice> findCompanyStockPriceDetails(String companyName, Date startDate, Date endDate,String stockExchangeName) {
		List<StockPrice> stockPriceList = stockPriceRepository.findByDateeBetween(startDate, endDate);
		List<StockPrice> stockPriceFinalList = new ArrayList<> ();
		for(StockPrice x: stockPriceList)
		{
			if(x.getCompany().getCompanyName().equals(companyName) && x.getExchangeName().equals(stockExchangeName))
			{
				stockPriceFinalList.add(x);
			}
		}
		return stockPriceFinalList;
	}
}
