package com.example.stockmarketapi.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.CompanyStockExchange;
import com.example.stockmarketapi.entity.StockExchange;

public interface CompanyStockExchangeRepository extends JpaRepository<CompanyStockExchange,Long> {

	public CompanyStockExchange findByCompanyAndStockExchange(Company company, StockExchange StockExchange);

	public CompanyStockExchange findByCompanyCode(String companyCode);

}
