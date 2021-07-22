package com.example.stockmarketapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.stockmarketapi.entity.Sector;

public interface SectorRepository extends JpaRepository<Sector,Long>
{

	public Sector findBySectorName(String sectorName);

}
