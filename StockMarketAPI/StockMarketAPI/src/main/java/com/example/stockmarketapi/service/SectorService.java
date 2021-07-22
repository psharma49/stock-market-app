package com.example.stockmarketapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.Sector;
import com.example.stockmarketapi.repository.SectorRepository;

@Service
public class SectorService {
	
	@Autowired
	private SectorRepository sectorRepository;

	public List<Sector> getSectorList() {
		return sectorRepository.findAll();
	}

	
	public List<Company> getAllCompaniesInASector(Long id) {
		
		Sector sector = sectorRepository.getById(id);
		return sector.getCompanies();
	}


	public void addNewSector(Sector sector) {
		sectorRepository.save(sector);
	}


	public Sector getSectorById(Long id) {
		return sectorRepository.findById(id).get();
	}


	




}
