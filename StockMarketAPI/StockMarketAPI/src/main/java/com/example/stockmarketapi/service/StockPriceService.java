package com.example.stockmarketapi.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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

	public void uploadStockPriceExcel(List<StockPrice> stockPriceList) {
		for (StockPrice x : stockPriceList) 
		{
			CompanyStockExchange companyStockExchange = companyStockExchangeRepository.findByCompanyCode(x.getCompanyCode());
			Company company = companyStockExchange.getCompany();
			x.setCompany(company);
			stockPriceRepository.save(x);
		}
	}

	public List<StockPrice> findCompanyStockPriceDetails(Long companyId, Date startDate, Date endDate) {
		List<StockPrice> stockPriceList = stockPriceRepository.findByDateeBetween(startDate, endDate);
		List<StockPrice> stockPriceFinalList = new ArrayList<> ();
		for(StockPrice x: stockPriceList)
		{
			if(x.getCompany().getId()==companyId)
			{
				stockPriceFinalList.add(x);
			}
		}
		return stockPriceFinalList;
	}
}
