package com.adriansanz.parkingapp.servicio;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.adriansanz.parkingapp.entidades.Ticket;
import com.adriansanz.parkingapp.entidades.Vehiculo;
import com.adriansanz.parkingapp.excepciones.ParkingNotFoundException;
import com.adriansanz.parkingapp.repositorios.TicketRepositorio;
import com.adriansanz.parkingapp.repositorios.VehiculoRepositorio;

@Service
public class TicketServicioImpl implements TicketServicio {

    private TicketRepositorio ticketRepositorio;
    private VehiculoRepositorio vehiculoRepositorio;

    public TicketServicioImpl(TicketRepositorio ticketRepositorio, VehiculoRepositorio vehiculoRepositorio) {
        this.ticketRepositorio = ticketRepositorio;
        this.vehiculoRepositorio = vehiculoRepositorio;
    }

    @Override
    public List<Ticket> getTickets() {
        return ticketRepositorio.findAll();
    }

    @Override
    public Ticket getTicketById(Long idTicket) {
        return ticketRepositorio.findById(idTicket)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún ticket con el ID: " + idTicket));
    }

    @Override
    public List<Ticket> getTicketsByMatricula(String matricula) {
        Vehiculo vehiculoExistente = vehiculoRepositorio.findByMatricula(matricula);

        if (vehiculoExistente == null) {
            throw new ParkingNotFoundException("No se encontró ningún vehiculo con la matricula: " + matricula);
        } else if (ticketRepositorio.findByVehiculoMatriculaOrderByEstadoAsc(matricula).isEmpty()) {
            throw new ParkingNotFoundException("No se encontró ningún ticket con la matricula: " + matricula);
        } else {
            return ticketRepositorio.findByVehiculoMatriculaOrderByEstadoAsc(matricula);
        }
    }

    @Override
    public List<Ticket> getTicketsPorEstado(String estado) {
        List<Ticket> tickets = ticketRepositorio.findByEstado(estado);
        if (tickets.isEmpty()) {
            throw new ParkingNotFoundException("No se encontró ningún ticket con el estado: " + estado);
        }
        return tickets;
    }

    @Override
    public Ticket addTicketNoPagado(String matricula) {
        Vehiculo vehiculo = vehiculoRepositorio.findByMatricula(matricula);
        Ticket ticket = new Ticket();
        if (vehiculo == null) {
            throw new ParkingNotFoundException("No se encontró vehículo con esa matrícula: " + matricula);
        }

        List<Ticket> ticketsNoPagados = ticketRepositorio.findByVehiculoAndEstado(vehiculo, "no_pagado");
        if (!ticketsNoPagados.isEmpty()) {
            throw new ParkingNotFoundException(
                    "El vehículo con matrícula " + matricula + " tiene un ticket no pagado.");
        }

        ticket.setHoraInicio(new Date());
        ticket.setVehiculo(vehiculo);
        ticket.setPrecio(vehiculo.getTipoVehiculo().getTarifaHora());
        ticket.setEstado("no_pagado");
        return ticketRepositorio.save(ticket);
    }

    @Override
    public Ticket updateTicketPagado(Long id) {
        Ticket ticket = ticketRepositorio.findById(id)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún ticket con el ID: " + id));

        ticket.setEstado("pagado");
        ticket.setHoraFin(new Date());

        return ticketRepositorio.save(ticket);
    }

}
