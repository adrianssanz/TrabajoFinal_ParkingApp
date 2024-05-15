package com.adriansanz.parkingapp.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adriansanz.parkingapp.entidades.Ticket;
import com.adriansanz.parkingapp.entidades.Vehiculo;

public interface TicketRepositorio extends JpaRepository<Ticket, Long>{
    List<Ticket> findByVehiculoMatriculaOrderByHoraInicioDesc(String matricula);
    List<Ticket> findByEstado(String estado);
    List<Ticket> findByVehiculoAndEstado(Vehiculo vehiculo, String estado);
}
