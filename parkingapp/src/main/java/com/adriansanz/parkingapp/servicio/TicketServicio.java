package com.adriansanz.parkingapp.servicio;

import java.util.List;

import com.adriansanz.parkingapp.entidades.Ticket;

public interface TicketServicio {

    public Ticket addTicketNoPagado(String matricula);
    public Ticket updateTicketPagado(Long id);
    public List<Ticket> getTickets();
    public Ticket getTicketById(Long id);
    public List<Ticket> getTicketsByMatricula(String matricula);
    public List<Ticket> getTicketsPorEstado(String estado);

}
