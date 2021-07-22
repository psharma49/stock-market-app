package com.example.stockmarketapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.stockmarketapi.entity.IpoDetails;

public interface IpoDetailsRepository extends JpaRepository<IpoDetails,Long>{
	

}
