package com.adriansanz.parkingapp.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vehiculo_id")
    private Vehiculo vehiculo;

    @Column(name = "hora_inicio")
    @Temporal(TemporalType.TIMESTAMP)
    private Date horaInicio;

    @Column(name = "hora_fin")
    @Temporal(TemporalType.TIMESTAMP)
    private Date horaFin;

    @Column(name = "precio")
    private double precio;

    @Column(name = "estado")
    private String estado;
}