package com.help.her.service;

import com.help.her.model.PickAndDrop;
import com.help.her.repository.PickAndDropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PickAndDropService {

    @Autowired
    private PickAndDropRepository repository;

    public PickAndDrop saveDelivery(PickAndDrop delivery) {
        return repository.save(delivery);
    }
}
