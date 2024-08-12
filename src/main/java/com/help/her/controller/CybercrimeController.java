package com.help.her.controller;

import com.help.her.model.Cybercrime;
import com.help.her.service.CybercrimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cybercrimes")
@CrossOrigin(origins = "http://localhost:3000")
public class CybercrimeController {

    @Autowired
    private CybercrimeService service;

    @PostMapping
    public Cybercrime submitReport(@RequestBody Cybercrime report) {
        System.out.println("Received report: " + report); // Debugging line
        return service.submitReport(report);
    }
}
