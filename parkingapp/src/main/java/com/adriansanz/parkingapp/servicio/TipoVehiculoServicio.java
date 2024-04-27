package com.adriansanz.parkingapp.servicio;

import java.util.List;

import com.adriansanz.parkingapp.entidades.TipoVehiculo;

public interface TipoVehiculoServicio {

    public List<TipoVehiculo> getTiposVehiculos();
    public TipoVehiculo getTipoVehiculoPorId(Long id);
}
