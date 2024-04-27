package com.adriansanz.parkingapp.excepciones;

public class ParkingNotFoundException extends RuntimeException {
    public ParkingNotFoundException(String message) {
        super(message);
    }
}