package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.help.her.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByUsername(String username);
    Login findByEmail(String email);
}