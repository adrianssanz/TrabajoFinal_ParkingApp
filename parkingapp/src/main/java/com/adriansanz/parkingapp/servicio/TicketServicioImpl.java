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
        } else if (ticketRepositorio.findByVehiculoMatriculaOrderByHoraInicioDesc(matricula).isEmpty()) {
            throw new ParkingNotFoundException("No se encontró ningún ticket con la matricula: " + matricula);
        } else {
            return ticketRepositorio.findByVehiculoMatriculaOrderByHoraInicioDesc(matricula);
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
    public Ticket addTicketEnCurso(Ticket ticket, String matricula) {
        Vehiculo vehiculo = vehiculoRepositorio.findByMatricula(matricula);
        if (vehiculo == null) {
            throw new ParkingNotFoundException("No se encontró vehículo con esa matrícula: " + matricula);
        }

        Ticket ticketEnCurso = ticketRepositorio.findByVehiculoAndEstado(vehiculo, "en_curso");
        if (ticketEnCurso != null) {
            throw new ParkingNotFoundException(
                    "El vehículo con matrícula " + vehiculo.getMatricula() + " tiene un ticket en curso.");
        }

        // Calcular el precio, calculando la diferencia entre la hora de fin y la hora de inicio

        long tiempoMilisegundos = ticket.getHoraFin().getTime() - ticket.getHoraInicio().getTime();
        long horas = tiempoMilisegundos / (1000 * 60 * 60);

        double precio = horas * vehiculo.getTipoVehiculo().getTarifaHora();

        ticket.setVehiculo(vehiculo);
        ticket.setPrecio(precio);
        ticket.setEstado("en_curso");
        return ticketRepositorio.save(ticket);
    }

    @Override
    public Ticket getTicketEnCurso(String matricula) {
        Vehiculo vehiculo = vehiculoRepositorio.findByMatricula(matricula);

        if (vehiculo == null) {
            throw new ParkingNotFoundException("No se encontró vehículo con esa matrícula: " + matricula);

        }

        Ticket ticketEnCurso = ticketRepositorio.findByVehiculoAndEstado(vehiculo, "en_curso");
        if (ticketEnCurso == null) {
            throw new ParkingNotFoundException(
                    "El vehículo con matrícula " + vehiculo.getMatricula() + " no tiene un ticket en curso.");
        }

        return ticketEnCurso;
    }

    @Override
    public Ticket ampliarTicket(Ticket ticket, Long idTicket) {

        Ticket ticketEnCurso = ticketRepositorio.findById(idTicket)
                .orElseThrow(() -> new ParkingNotFoundException("No se encontró ningún ticket con el ID: " + idTicket));

        // Calcular el precio, calculando la diferencia entre la hora de fin y la hora de inicio

        long tiempoMilisegundos = ticket.getHoraFin().getTime()-ticket.getHoraInicio().getTime();
        long horas = tiempoMilisegundos / (1000 * 60 * 60);

        double precio = horas * ticket.getVehiculo().getTipoVehiculo().getTarifaHora();
        ticketEnCurso.setHoraFin(ticket.getHoraFin());
        ticketEnCurso.setPrecio(precio);

        return ticketRepositorio.save(ticketEnCurso);
    }

}
