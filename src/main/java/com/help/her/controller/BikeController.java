package com.help.her.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.help.her.model.Bike;
import com.help.her.service.BikeService;

import java.util.List;

@RestController
@RequestMapping("/api/bikes")
@CrossOrigin(origins = "http://localhost:3000")

public class BikeController {
    @Autowired
    private BikeService bikeService;

    @GetMapping
    public List<Bike> getAllBikes() {
        return bikeService.getAllBikes();
    }

    @PostMapping
    public Bike createBike(@RequestBody Bike bike) {
        return bikeService.saveBike(bike);
    }

    @DeleteMapping("/{id}")
    public void deleteBike(@PathVariable Long id) {
        bikeService.deleteBike(id);
    }
}
