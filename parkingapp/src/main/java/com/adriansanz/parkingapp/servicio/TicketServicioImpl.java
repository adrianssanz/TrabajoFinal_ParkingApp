package com.adriansanz.parkingapp.servicio;

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
        } else if (ticketRepositorio.findByVehiculoMatricula(matricula).isEmpty()) {
            throw new ParkingNotFoundException("No se encontró ningún ticket con la matricula: " + matricula);
        } else {
            return ticketRepositorio.findByVehiculoMatricula(matricula);
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

}
