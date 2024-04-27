package com.adriansanz.parkingapp.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adriansanz.parkingapp.entidades.Ticket;

public interface TicketRepositorio extends JpaRepository<Ticket, Long>{

}
