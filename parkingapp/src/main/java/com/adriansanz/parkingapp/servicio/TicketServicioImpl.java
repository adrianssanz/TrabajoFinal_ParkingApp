package com.adriansanz.parkingapp.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adriansanz.parkingapp.entidades.Ticket;
import com.adriansanz.parkingapp.repositorios.TicketRepositorio;

@Service
public class TicketServicioImpl implements TicketServicio{

    @Autowired
    private TicketRepositorio ticketRepositorio;

    @Override
    public List<Ticket> getTickets() {
        return ticketRepositorio.findAll();
    }

}
