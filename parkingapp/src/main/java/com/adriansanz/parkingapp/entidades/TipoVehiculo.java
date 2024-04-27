package com.adriansanz.parkingapp.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Tipos_Vehiculos")
public class TipoVehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tipo_id")
    private Long id;

    @Column(name = "tipo_vehiculo")
    private String tipoVehiculo;

    @Column(name = "tarifa_hora")
    private double tarifaHora;
}
