package com.PM.fullstack_backend.controller;

import com.PM.fullstack_backend.exception.PlacementNotFoundException;
import com.PM.fullstack_backend.model.Placement;
import com.PM.fullstack_backend.repository.PlacementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PlacementController {
    @Autowired
    private PlacementRepository placementRepository;

    @PostMapping("/placement")
    Placement newPlacement(@RequestBody Placement newPlacement) {
        return placementRepository.save(newPlacement);

    }

    @GetMapping("/Allplacement")
    List<Placement> getAllPlacement() {
        return placementRepository.findAll();
    }
    @GetMapping("/placement/{id}")
    Placement getPlacementById(@PathVariable int id) {
        return placementRepository.findById(id)
                .orElseThrow(()->new PlacementNotFoundException(id));
    }
    @PutMapping("/placement/{id}")
    Placement updatePlacement(@RequestBody  Placement newPlacement,@PathVariable int id)
    {
        return placementRepository.findById(id)
        .map(placement ->{
            placement.setCompanyname(newPlacement.getCompanyname());
            placement.setJobtitle(newPlacement.getJobtitle());
            placement.setPlacementdate(newPlacement.getPlacementdate());
            placement.setStudentid(newPlacement.getStudentid());
            return placementRepository.save(placement);
        }).orElseThrow(()->new PlacementNotFoundException(id));
    }
@DeleteMapping("/placement/{id}")
    String deletePlacement(@PathVariable int id) {
        if(!placementRepository.existsById(id)){
            throw new PlacementNotFoundException(id);
        }
        placementRepository.deleteById(id);
        return "Placement id"+id+" deleted";
}
}
