package com.PM.fullstack_backend.repository;

import com.PM.fullstack_backend.model.Placement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlacementRepository extends JpaRepository<Placement,Integer> {
}
