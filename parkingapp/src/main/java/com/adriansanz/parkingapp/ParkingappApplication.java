package com.adriansanz.parkingapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ParkingappApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingappApplication.class, args);

		System.out.println(
                "-------------------------------------------\n\nParkingApp API se ha iniciado correctamente.\n\n-------------------------------------------");
	}

}
