package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.help.her.model.Contact;
import com.help.her.service.ContactService;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")

public class ContactController {
    @Autowired
    private ContactService contactService;

    @SuppressWarnings("null")
    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        try {
            Contact savedContact = contactService.saveContact(contact);
            return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
