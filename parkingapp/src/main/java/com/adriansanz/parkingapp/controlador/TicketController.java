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

@RestController
@RequestMapping("/api")
public class TicketController {

    @Autowired
    private TicketServicio ticketServicio;

    @PostMapping("/tickets/{matricula}")
    public ResponseEntity<Ticket> addTicketEnCurso(@RequestBody Ticket ticket, @PathVariable String matricula) {
        Ticket nuevoTicket = ticketServicio.addTicketEnCurso(ticket, matricula);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoTicket);
    }

    @PutMapping("/tickets/{idTicket}/ampliar")
    public ResponseEntity<Ticket> ampliarTicket(@RequestBody Ticket ticket, @PathVariable Long idTicket) {
        Ticket ticketAmpliado = ticketServicio.ampliarTicket(ticket, idTicket);
        return ResponseEntity.ok().body(ticketAmpliado);
    }

    @PutMapping("/tickets/{idTicket}/finalizado")
    public ResponseEntity<Ticket> finalizarTicket(@RequestBody Ticket ticket, @PathVariable Long idTicket){
        Ticket ticketFinalizado = ticketServicio.finalizarTicketEnCurso(ticket, idTicket);
        return ResponseEntity.ok().body(ticketFinalizado);
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

    @GetMapping("/tickets/terminados")
    public List<Ticket> getTicketsPagados() {
        return ticketServicio.getTicketsPorEstado("terminado");
    }

    @GetMapping("/tickets/en-curso")
    public List<Ticket> getTicketsNoPagados() {
        return ticketServicio.getTicketsPorEstado("en_curso");
    }

    @GetMapping("/tickets/en-curso/matricula/{matricula}")
    public Ticket getTicketEnCurso(@PathVariable String matricula){
        return ticketServicio.getTicketEnCurso(matricula);
    }

}
