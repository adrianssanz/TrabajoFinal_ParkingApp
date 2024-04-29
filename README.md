# TrabajoFinal_ParkingApp

Trabajo final Grado Superior Desarrollo de apliaciones Web, Adrián Sanz Sandoval.

# Endpoints API

## Tabla Vehiculos

### Con petición GET

"/api/vehiculos": Obtiene todos los vehiculos.

"/api/vehiculos/{idVehiculo}": Obtiene un vehiculo por su ID.

"/api/vehiculos/matricula/{matricula}": Obtiene un vehiculo por su matricula.

### Con petición POST

"/api/vehiculos/{tipoId}": Se le proporciona un objeto vehiculo y el id del tipo de vehiculo que es, y añade un vehiculo con su tipo a la tabla.

### Con petición DELETE

"/vehiculos/{idVehiculo}": Borra un vehiculo de la tabla segun su Id.

## Tabla Tipos de Vehiculos

### Con petición GET

"/tiposVehiculos": Obtiene todos los tipos de vehiculos.

"/tiposVehiculos/{tipoId}": Obtiene un tipo de vehiculo por su ID.

## Tabla Tickets (En proceso)

### Con petición GET

"/tickets": Obtiene todos los tickets.

"/tickets/{idTicket}": Obtiene un ticket por su ID.

"/tickets/matricula/{matricula}": Obitiene los tickets asociados a una matricula.

"/tickets/pagados": Obtiene los tickets en estado "pagado".

"/tickets/no-pagados": Obtiene los tickets en estado "no_pagado".