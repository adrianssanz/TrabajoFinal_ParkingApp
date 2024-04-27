package com.adriansanz.parkingapp.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adriansanz.parkingapp.servicio.TicketServicio;

import com.adriansanz.parkingapp.entidades.Ticket;

@RestController
@RequestMapping("/api")
public class TicketController {

    @Autowired
    private TicketServicio ticketServicio;

    @GetMapping("/tickets")
    public List<Ticket> getTickets(){
        return ticketServicio.getTickets();
    }

}
