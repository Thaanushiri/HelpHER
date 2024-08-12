package com.help.her.controller;

import com.help.her.model.RoomBooking;
import com.help.her.service.RoomBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/room-bookings")
@CrossOrigin(origins = "http://localhost:3000")

public class RoomBookingController {

    @Autowired
    private RoomBookingService roomBookingService;

    @PostMapping
    public ResponseEntity<RoomBooking> createBooking(@Valid @RequestBody RoomBooking booking) {
        RoomBooking savedBooking = roomBookingService.saveBooking(booking);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomBooking> getBookingById(@PathVariable Long id) {
        return roomBookingService.getBookingById(id)
                .map(booking -> new ResponseEntity<>(booking, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<Iterable<RoomBooking>> getAllBookings() {
        return new ResponseEntity<>(roomBookingService.getAllBookings(), HttpStatus.OK);
    }
}
