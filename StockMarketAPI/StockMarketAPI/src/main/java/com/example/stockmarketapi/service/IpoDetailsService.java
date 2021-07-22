package com.example.stockmarketapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockmarketapi.entity.IpoDetails;
import com.example.stockmarketapi.repository.IpoDetailsRepository;

@Service
public class IpoDetailsService {

	@Autowired
	private IpoDetailsRepository ipoDetailsRepository;
	public List<IpoDetails> getAllIpo() 
	{
		return ipoDetailsRepository.findAll();
	}
	
	
	public IpoDetails getIpoById(Long id) {
		return ipoDetailsRepository.findById(id).get();
	}
	
	

}
