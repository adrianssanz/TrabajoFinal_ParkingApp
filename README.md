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
