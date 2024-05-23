package com.adriansanz.parkingapp.servicio;

import java.util.List;

import com.adriansanz.parkingapp.entidades.Ticket;

public interface TicketServicio {

    public Ticket addTicketEnCurso(Ticket ticket, String matricula);
    public Ticket ampliarTicket(Ticket ticket, Long id);
    public List<Ticket> getTickets();
    public Ticket getTicketById(Long id);
    public List<Ticket> getTicketsByMatricula(String matricula);
    public List<Ticket> getTicketsPorEstado(String estado);
    public Ticket getTicketEnCurso(String matricula);

}
