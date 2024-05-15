package com.adriansanz.parkingapp.servicio;

import java.util.List;

import com.adriansanz.parkingapp.entidades.Vehiculo;

public interface VehiculoServicio {
    
    public List<Vehiculo> getVehiculos();
    public Vehiculo addVehiculo(Vehiculo vehiculo, Long tipoId);
    public Vehiculo getVehiculoById(Long id);
    public Vehiculo getVehiculoByUid(String uid);
    public Vehiculo getVehiculoByMatricula(String matricula);
    public String deleteVehiculo(Long id);

}
