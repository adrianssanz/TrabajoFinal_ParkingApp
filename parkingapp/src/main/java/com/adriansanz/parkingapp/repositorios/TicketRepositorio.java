package com.adriansanz.parkingapp.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adriansanz.parkingapp.entidades.Ticket;

public interface TicketRepositorio extends JpaRepository<Ticket, Long>{
    List<Ticket> findByVehiculoMatricula(String matricula);
    List<Ticket> findByEstado(String estado);
}
