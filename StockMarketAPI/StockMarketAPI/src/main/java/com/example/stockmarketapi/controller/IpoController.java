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
import com.example.stockmarketapi.entity.IpoDetails;
import com.example.stockmarketapi.repository.CompanyRepository;
import com.example.stockmarketapi.service.IpoDetailsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IpoController {
	
	
	@Autowired
	private IpoDetailsService ipoDetailsService;
	
	@RequestMapping(value = "/getAllIpo", method = RequestMethod.GET)
	public List<IpoDetails> getAllIpo()
	{
		return ipoDetailsService.getAllIpo();
	}
	
	@RequestMapping(value = "/getIpoById/{id}", method = RequestMethod.GET)
	public IpoDetails getIpoById(@PathVariable ("id") Long id)
	{
		return ipoDetailsService.getIpoById(id);
	}
	
	@RequestMapping(value = "/getCompanyNameByIpoId/{id}", method = RequestMethod.GET)
	public String getCompanyNameByIpoId(@PathVariable ("id") Long id)
	{
		return ipoDetailsService.getCompanyNameByIpoId(id);
		
	}
	
	@RequestMapping(value = "/addIPO/{companyId}", method = RequestMethod.POST)
	public ResponseEntity<Void> addIPO(@RequestBody IpoDetails ipoDetails, @PathVariable ("companyId") Long companyId)
	{
		ipoDetailsService.addIPO(ipoDetails,companyId);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	@RequestMapping(value = "/updateAnIPO", method = RequestMethod.POST)
	public ResponseEntity<Void> updateAnIPO(@RequestBody IpoDetails ipoDetails)
	{
		ipoDetailsService.updateIpo(ipoDetails);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	
	
}
