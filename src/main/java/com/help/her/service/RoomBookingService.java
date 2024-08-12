package com.help.her.service;

import com.help.her.model.RoomBooking;
import com.help.her.repository.RoomBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomBookingService {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public RoomBooking saveBooking(RoomBooking booking) {
        return roomBookingRepository.save(booking);
    }

    public List<RoomBooking> getAllBookings() {
        return roomBookingRepository.findAll();
    }

    public Optional<RoomBooking> getBookingById(Long id) {
        return roomBookingRepository.findById(id);
    }
}
