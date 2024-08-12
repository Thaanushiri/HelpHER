package com.help.her.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.help.her.model.Bike;
import com.help.her.repository.BikeRepository;

import java.util.List;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;

    public List<Bike> getAllBikes() {
        return bikeRepository.findAll();
    }

    public Bike saveBike(Bike bike) {
        return bikeRepository.save(bike);
    }

    public void deleteBike(Long id) {
        bikeRepository.deleteById(id);
    }
}

