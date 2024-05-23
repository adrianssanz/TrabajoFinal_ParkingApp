# TrabajoFinal_ParkingApp

Esta aplicación ha sido desarrollada para el proyecto de fin de grado del Grado Superior Desarrollo de apliaciones Web por el alumno Adrián Sanz Sandoval.

La aplicación consiste en una versión web para la gestión de un ticket de vehiculo. Nos permite crear un ticket asociado a una matricula, ampliarlo, y ver un historial de tickets del vehiculo loggeado mediante el servicio de firebase.

# Estructura

La aplicación consta de las siguientes partes, una base de datos desplegada en local en MySql, un api desarrollado en SpringBoot, que sirve para comunicar la parte front con la base de datos y un front desarrollado en Angular.js.

# Tecnologias utilizadas

Algunas de las tecnoligias utilizadas para esta aplicación son:

Front:

<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/> <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"/> <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/Angular_Material-1976D2?style=for-the-badge&logo=angular&logoColor=white"/>


Back: 

<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"/> <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/> <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"/>


# Endpoints API 

## Tabla Vehiculos

### Con petición GET 
![API GET Badge](https://img.shields.io/badge/API-GET-<COLOR>?style=for-the-badge)

"/api/vehiculos": Obtiene todos los vehiculos.

"/api/vehiculos/{idVehiculo}": Obtiene un vehiculo por su ID.

"/api/vehiculos/matricula/{matricula}": Obtiene un vehiculo por su matricula.

"/api/vehiculos/uid/{uid}": Obtiene un vehiculo por su UID.

### Con petición POST
![API POST Badge](https://img.shields.io/badge/API-POST-yellow?style=for-the-badge)

"/api/vehiculos/{tipoId}": Se le proporciona un objeto vehiculo y el id del tipo de vehiculo que es, y añade un vehiculo con su tipo a la tabla.

### Con petición DELETE
![API DELETE Badge](https://img.shields.io/badge/API-DELETE-red?style=for-the-badge)

"/vehiculos/{idVehiculo}": Borra un vehiculo de la tabla segun su Id.

## Tabla Tipos de Vehiculos

### Con petición GET
![API GET Badge](https://img.shields.io/badge/API-GET-<COLOR>?style=for-the-badge)

"/tiposVehiculos": Obtiene todos los tipos de vehiculos.

"/tiposVehiculos/{tipoId}": Obtiene un tipo de vehiculo por su ID.

## Tabla Tickets

### Con petición GET
![API GET Badge](https://img.shields.io/badge/API-GET-<COLOR>?style=for-the-badge)

"/tickets": Obtiene todos los tickets.

"/tickets/{idTicket}": Obtiene un ticket por su ID.

"/tickets/matricula/{matricula}": Obitiene los tickets asociados a una matricula ordenados por fecha.

"/tickets/terminados": Obtiene los tickets en estado "terminado".

"/tickets/en-curso": Obtiene los tickets en estado "en_curso".

"/tickets/en-curso/matricula/{matricula}": Obtiene el ticket "en_curso" de un vehiculo.

### Con petición POST
![API POST Badge](https://img.shields.io/badge/API-POST-yellow?style=for-the-badge)

"/tickets/{matricula}": Crea un ticket en estado "no_pagado" asociado al coche con esa matricula, tambien comprueba si existe algun ticket "no_pagado".

### Con petición PUT
![API PUT Badge](https://img.shields.io/badge/API-PUT-orange?style=for-the-badge)

"/tickets/{idTicket}/terminado": Amplia el ticket segun la duración que se le mande desde el front.
