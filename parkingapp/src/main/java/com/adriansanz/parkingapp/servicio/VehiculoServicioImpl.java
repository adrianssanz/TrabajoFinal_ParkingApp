package com.adriansanz.parkingapp.servicio;

import java.util.List;

import org.springframework.stereotype.Service;

import com.adriansanz.parkingapp.entidades.TipoVehiculo;
import com.adriansanz.parkingapp.entidades.Vehiculo;
import com.adriansanz.parkingapp.excepciones.ObjetoExistenteException;
import com.adriansanz.parkingapp.excepciones.ParkingNotFoundException;
import com.adriansanz.parkingapp.repositorios.TipoVehiculoRepositorio;
import com.adriansanz.parkingapp.repositorios.VehiculoRepositorio;

@Service
public class VehiculoServicioImpl implements VehiculoServicio {

    private VehiculoRepositorio vehiculoRepositorio;
    private TipoVehiculoRepositorio tipoVehiculoRepositorio;

    public VehiculoServicioImpl(VehiculoRepositorio vehiculoRepositorio,
            TipoVehiculoRepositorio tipoVehiculoRepositorio) {
        this.vehiculoRepositorio = vehiculoRepositorio;
        this.tipoVehiculoRepositorio = tipoVehiculoRepositorio;
    }

    @Override
    public List<Vehiculo> getVehiculos() {
        return vehiculoRepositorio.findAll();
    }

    @Override
    public Vehiculo addVehiculo(Vehiculo vehiculo, Long tipoId) {
        String matricula = vehiculo.getMatricula();
        Vehiculo vehiculoExistente = vehiculoRepositorio.findByMatricula(matricula);
        if (vehiculoExistente != null) {
            throw new ObjetoExistenteException("Ya existe un vehículo con la matrícula " + matricula);
        }

        TipoVehiculo tipoVehiculo = tipoVehiculoRepositorio.findById(tipoId)
                .orElseThrow(() -> new ParkingNotFoundException(
                        "No se encontró ningún tipo de vehiculo con el ID: " + tipoId));

        vehiculo.setTipoVehiculo(tipoVehiculo);

        return vehiculoRepositorio.save(vehiculo);
    }

    @Override
    public Vehiculo getVehiculoById(Long id) {
        return vehiculoRepositorio.findById(id)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún vehiculo con el ID: " + id));
    }

    @Override
    public String deleteVehiculo(Long id) {

        Vehiculo vehiculoEliminar = vehiculoRepositorio.findById(id)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún vehiculo con el ID: " + id));
        ;

        vehiculoRepositorio.delete(vehiculoEliminar);

        return "Vehiculo con id " + id + " borrado correctamente.";
    }

    @Override
    public Vehiculo getVehiculoByMatricula(String matricula) {
        Vehiculo vehiculo = vehiculoRepositorio.findByMatricula(matricula);

        if(vehiculo!=null){
            return vehiculo;
        } else {
            throw new ParkingNotFoundException("No se encontró ningún vehiculo con la matricula: " + matricula);
        }
        
    }

}
