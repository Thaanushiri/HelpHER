package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.help.her.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}


