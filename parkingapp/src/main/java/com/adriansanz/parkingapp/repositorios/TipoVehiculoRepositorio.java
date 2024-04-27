package com.adriansanz.parkingapp.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adriansanz.parkingapp.entidades.TipoVehiculo;

public interface TipoVehiculoRepositorio extends JpaRepository <TipoVehiculo, Long>{

}
