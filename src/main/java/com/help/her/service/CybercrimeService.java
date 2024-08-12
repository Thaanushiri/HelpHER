package com.help.her.service;

import com.help.her.model.Cybercrime;
import com.help.her.repository.CybercrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CybercrimeService {

    @Autowired
    private CybercrimeRepository repository;

    public Cybercrime submitReport(Cybercrime report) {
        return repository.save(report);
    }
}
