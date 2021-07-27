package com.example.stockmarketapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockmarketapi.entity.Company;
import com.example.stockmarketapi.entity.IpoDetails;
import com.example.stockmarketapi.repository.CompanyRepository;
import com.example.stockmarketapi.repository.IpoDetailsRepository;

@Service
public class IpoDetailsService {

	@Autowired
	private IpoDetailsRepository ipoDetailsRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public List<IpoDetails> getAllIpo() 
	{
		return ipoDetailsRepository.findAll();
	}
	
	
	public IpoDetails getIpoById(Long id) {
		return ipoDetailsRepository.findById(id).get();
	}


	public void addIPO(IpoDetails ipoDetails,Long companyId) {
		Company company = companyRepository.findById(companyId).get();
		System.out.println(company.getCompanyName());
		System.out.println(ipoDetails.getOpenDateTime());
		System.out.println(ipoDetails.getPricePerShare());
		System.out.println(ipoDetails.getRemarks());
		System.out.println(ipoDetails.getPricePerShare());
		ipoDetails.setCompany(company);
		ipoDetailsRepository.save(ipoDetails);
		
	}


	public String getCompanyNameByIpoId(Long id) {
		IpoDetails ipoDetails = ipoDetailsRepository.findById(id).get();
		return ipoDetails.getCompany().getCompanyName();
	}


	public void updateIpo(IpoDetails ipoDetails) {
		IpoDetails ipoDet = ipoDetailsRepository.findById(ipoDetails.getId()).get();
		ipoDet.setOpenDateTime(ipoDetails.getOpenDateTime());
		ipoDet.setPricePerShare(ipoDetails.getPricePerShare());
		ipoDet.setRemarks(ipoDetails.getRemarks());
		ipoDet.setTotalShares(ipoDetails.getTotalShares());
		ipoDetailsRepository.save(ipoDet);
		
	}
	
	

}
