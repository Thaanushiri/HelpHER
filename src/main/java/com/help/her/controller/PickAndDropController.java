package com.help.her.controller;

import com.help.her.model.PickAndDrop;
import com.help.her.service.PickAndDropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pick-and-drop")
@CrossOrigin(origins = "http://localhost:3000")
public class PickAndDropController {

    @Autowired
    private PickAndDropService service;

    @PostMapping
    public PickAndDrop submitDelivery(@RequestBody PickAndDrop delivery) {
        return service.saveDelivery(delivery);
    }
}
