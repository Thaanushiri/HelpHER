package com.help.her.repository;

import com.help.her.model.RoomBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomBookingRepository extends JpaRepository<RoomBooking, Long> {
}
