package com.example.stockmarketapi.controller;

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
import com.example.stockmarketapi.entity.Sector;
import com.example.stockmarketapi.service.SectorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SectorController {
	
	
	@Autowired
	private SectorService sectorService;
	
	
	
	@RequestMapping(value = "/getSectorList", method = RequestMethod.GET)
	public List<Sector> getSectorList()
	{
		return sectorService.getSectorList();
	}
	
	
	
	@RequestMapping(value = "/getSectorById/{id}", method = RequestMethod.GET)
	public Sector getSectorById(@PathVariable ("id") Long id)
	{
		return sectorService.getSectorById(id);
	}
	
	@RequestMapping(value = "/getAllCompaniesInASector/{id}", method = RequestMethod.GET)
	public List<Company> getAllCompaniesInASector(@PathVariable ("id") Long id)
	{
		return sectorService.getAllCompaniesInASector(id);
		
	}
	
	@RequestMapping(value = "/addNewSector", method = RequestMethod.POST)
	public ResponseEntity<Void> addNewSector(@RequestBody Sector sector)
	{
		sectorService.addNewSector(sector);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	@RequestMapping(value = "/updateSector", method = RequestMethod.POST)
	public ResponseEntity<Void> updateSector(@RequestBody Sector sector)
	{
		sectorService.updateSector(sector);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	

	
}
