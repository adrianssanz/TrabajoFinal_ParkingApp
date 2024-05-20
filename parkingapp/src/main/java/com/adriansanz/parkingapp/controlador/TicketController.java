package com.adriansanz.parkingapp.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adriansanz.parkingapp.servicio.TicketServicio;

import com.adriansanz.parkingapp.entidades.Ticket;
import com.adriansanz.parkingapp.entidades.Vehiculo;

@RestController
@RequestMapping("/api")
public class TicketController {

    @Autowired
    private TicketServicio ticketServicio;

    @PostMapping("/tickets/{matricula}")
    public ResponseEntity<Ticket> addTicketNoPagado(@RequestBody Ticket ticket, @PathVariable String matricula) {
        Ticket nuevoTicket = ticketServicio.addTicketNoPagado(ticket, matricula);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoTicket);
    }

    @PutMapping("/tickets/{id}/pagado")
    public ResponseEntity<Ticket> updateTicketPagado(@PathVariable Long id) {
        Ticket ticketPagado = ticketServicio.updateTicketPagado(id);
        return ResponseEntity.ok().body(ticketPagado);
    }

    @GetMapping("/tickets")
    public List<Ticket> getTickets() {
        return ticketServicio.getTickets();
    }

    @GetMapping("/tickets/{idTicket}")
    public Ticket getTicketById(@PathVariable Long idTicket) {
        return ticketServicio.getTicketById(idTicket);
    }

    @GetMapping("/tickets/matricula/{matricula}")
    public List<Ticket> getTicketsByMatricula(@PathVariable String matricula) {
        return ticketServicio.getTicketsByMatricula(matricula);
    }

    @GetMapping("/tickets/pagados")
    public List<Ticket> getTicketsPagados() {
        return ticketServicio.getTicketsPorEstado("pagado");
    }

    @GetMapping("/tickets/no-pagados")
    public List<Ticket> getTicketsNoPagados() {
        return ticketServicio.getTicketsPorEstado("no_pagado");
    }

}
