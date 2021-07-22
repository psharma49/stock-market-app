package com.example.stockmarketapi.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stockmarketapi.entity.StockExchange;

public interface StockExchangeRepository extends JpaRepository<StockExchange,Long> 
{
    public StockExchange findByStockExchangeName(String stockExchangeName);
}
