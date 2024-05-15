package com.adriansanz.parkingapp.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adriansanz.parkingapp.entidades.Vehiculo;

@Repository
public interface VehiculoRepositorio extends JpaRepository<Vehiculo, Long> {
    Vehiculo findByMatricula(String matricula);
    Vehiculo findByUid(String uid);
}
