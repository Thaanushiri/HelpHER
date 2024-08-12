package com.help.her.repository;

import com.help.her.model.Cybercrime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CybercrimeRepository extends JpaRepository<Cybercrime, Long> {
}
