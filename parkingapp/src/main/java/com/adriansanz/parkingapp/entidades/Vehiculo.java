package com.adriansanz.parkingapp.entidades;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Vehiculos")
public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vehiculo_id")
    private Long id;

    @NotEmpty(message = "La matrícula no debe estar vacía o nula.")
    @Pattern(regexp = "\\d{4}[A-Z]{3}", message = "El formato de la matrícula debe ser XXXXLLL (donde X es un dígito y L es una letra mayúscula).")
    @Column(name = "matricula", unique = true)
    private String matricula;

    @ManyToOne
    @JoinColumn(name = "tipo_id")
    private TipoVehiculo tipoVehiculo;
}