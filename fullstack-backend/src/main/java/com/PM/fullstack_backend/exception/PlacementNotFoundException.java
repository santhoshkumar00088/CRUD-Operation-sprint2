package com.PM.fullstack_backend.exception;

public class PlacementNotFoundException extends RuntimeException{
    public PlacementNotFoundException(Integer id) {
        super("could not find placement with id " + id );
    }
}
