package com.adriansanz.parkingapp.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adriansanz.parkingapp.entidades.TipoVehiculo;
import com.adriansanz.parkingapp.excepciones.ParkingNotFoundException;
import com.adriansanz.parkingapp.repositorios.TipoVehiculoRepositorio;

@Service
public class TipoVehiculoServicioImpl implements TipoVehiculoServicio {

    @Autowired
    private TipoVehiculoRepositorio tipoVehiculoRepositorio;

    @Override
    public List<TipoVehiculo> getTiposVehiculos() {
        return tipoVehiculoRepositorio.findAll();
    }


    @Override
    public TipoVehiculo getTipoVehiculoPorId(Long id) {
        return tipoVehiculoRepositorio.findById(id)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún tipo de vehiculo con el ID: " + id));
    }

}
