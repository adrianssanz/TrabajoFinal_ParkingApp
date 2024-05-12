package com.adriansanz.parkingapp.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adriansanz.parkingapp.entidades.AuthRequest;
import com.adriansanz.parkingapp.entidades.Vehiculo;
import com.adriansanz.parkingapp.servicio.VehiculoServicio;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private VehiculoServicio vehiculoServicio;
    
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody AuthRequest request) {
        Vehiculo vehiculo = vehiculoServicio.getVehiculoByMatricula(request.getMatricula());
        
        if (vehiculo != null && vehiculo.getPassword().equals(request.getPassword())) {
            return ResponseEntity.ok(true); // Credenciales válidas
        } else {
            return ResponseEntity.ok(false); // Credenciales inválidas
        }
    }
}