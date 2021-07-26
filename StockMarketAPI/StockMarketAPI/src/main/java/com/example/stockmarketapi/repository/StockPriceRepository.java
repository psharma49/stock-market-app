package com.example.stockmarketapi.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.stockmarketapi.entity.StockPrice;

public interface StockPriceRepository extends JpaRepository<StockPrice,Long> 
{

	@Query(value="select * from stock_price where company_id = :company_id and datee between :start_date and :end_date", nativeQuery=true)
	public List<StockPrice> findStockPriceDetailsBetweenDates(@Param("company_id")Long companyId, @Param("start_date") Date startDate, 
			                                                                                       @Param("end_date") Date endDate
			                                                                                   );
	
	
	public List<StockPrice> findByDateeBetween(Date startDate,Date endDate);

}
