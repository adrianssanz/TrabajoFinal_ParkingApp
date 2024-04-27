package com.adriansanz.parkingapp.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.adriansanz.parkingapp.servicio.TipoVehiculoServicio;

import com.adriansanz.parkingapp.entidades.TipoVehiculo;

@RestController
@RequestMapping("/api")
public class TipoVehiculoController {
    
    @Autowired
    private TipoVehiculoServicio tipoVehiculoServicio;

    @GetMapping("/tiposVehiculos")
    public List<TipoVehiculo> getTiposVehiculos(){
        return tipoVehiculoServicio.getTiposVehiculos();
    }

    @GetMapping("/tiposVehiculos/{tipoId}")
    public TipoVehiculo getTipoVehiculosById(@PathVariable Long tipoId){
        return tipoVehiculoServicio.getTipoVehiculoPorId(tipoId);
    }
}
