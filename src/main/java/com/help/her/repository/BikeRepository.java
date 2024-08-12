package com.help.her.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.help.her.model.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {
}
