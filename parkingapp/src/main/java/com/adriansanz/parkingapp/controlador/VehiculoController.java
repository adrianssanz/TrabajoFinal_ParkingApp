package com.adriansanz.parkingapp.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adriansanz.parkingapp.entidades.Vehiculo;

import com.adriansanz.parkingapp.servicio.VehiculoServicio;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class VehiculoController {

    @Autowired
    private VehiculoServicio vehiculoServicio;

    @GetMapping("/vehiculos")
    
    public List<Vehiculo> getVehiculos(){
        return vehiculoServicio.getVehiculos();
    }

    @GetMapping("/vehiculos/{idVehiculo}")
    public Vehiculo getVehiculoById(@PathVariable Long idVehiculo) {
        return vehiculoServicio.getVehiculoById(idVehiculo);
    }

    @GetMapping("/vehiculos/matricula/{matricula}")
    public Vehiculo getVehiculoByMatricula(@PathVariable String matricula) {
        return vehiculoServicio.getVehiculoByMatricula(matricula);
    }

    @GetMapping("/vehiculos/uid/{uid}")
    public Vehiculo getVehiculoByUid(@PathVariable String uid) {
        return vehiculoServicio.getVehiculoByUid(uid);
    }

    @DeleteMapping("/vehiculos/{idVehiculo}")
    public String deleteVehiculo(@PathVariable Long idVehiculo){
        return vehiculoServicio.deleteVehiculo(idVehiculo);
    }

    @PostMapping("/vehiculos/{tipoId}")
    public Vehiculo agregarVehiculo(@Valid @RequestBody Vehiculo vehiculo, @PathVariable Long tipoId) {
        return vehiculoServicio.addVehiculo(vehiculo, tipoId);
    }



}
