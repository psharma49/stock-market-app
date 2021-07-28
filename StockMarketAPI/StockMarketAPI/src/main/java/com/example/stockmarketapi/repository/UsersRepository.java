package com.example.stockmarketapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stockmarketapi.entity.Users;

public interface UsersRepository extends JpaRepository<Users,Long>{

	Users findByName(String username);
     

}
