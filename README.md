
## Descripción

Esta aplicación ha sido desarrollada para el proyecto de fin de grado del Grado Superior Desarrollo de apliaciones Web por el alumno Adrián Sanz Sandoval.

[@adrianssanz](https://www.github.com/adrianssanz)

La aplicación consiste en una versión web para la gestión de un ticket de vehiculo. Nos permite crear un ticket asociado a una matricula, ampliarlo, y ver un historial de tickets del vehiculo loggeado mediante el servicio de firebase.

La API a su vez permite muchas mas acciones como ver todos los usuarios, eliminar usuarios o ver todos los tickets y filtrarlos por su estado.

## Estructura

La aplicación consta de las siguientes partes, una base de datos desplegada en local en MySql, un api desarrollado en SpringBoot, que sirve para comunicar la parte front con la base de datos y un front desarrollado en Angular.js.

## Tecnologias utilizadas

Algunas de las tecnoligias utilizadas para esta aplicación son:

Front:

![Angular Badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![Firebase Badge](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) ![Node.js Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS Badge](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Angular Material Badge](https://img.shields.io/badge/Angular_Material-1976D2?style=for-the-badge&logo=angular&logoColor=white)

Back: 

![Java Badge](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot Badge](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white) ![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Maven Badge](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)


## Demo de la aplicación

[![Demo de la aplicación](https://img.youtube.com/vi/FsNsPiMs6hY/0.jpg)](https://www.youtube.com/watch?v=FsNsPiMs6hY)


## Información API

### Tabla Vehiculos

![APIS GET Badge](https://img.shields.io/badge/API-GET-brightgreen?style=for-the-badge)

#### Get Vehiculos

```http
  GET /api/vehiculos
```

#### Get Vehiculo

```http
  GET /api/vehiculos/${idVehiculo}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `long` | **Requerido**. Id del vehiculo |

#### Get Vehiculo por matricula

```http
  GET /api/vehiculos/matricula/${matricula}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `matricula`      | `string` | **Requerido**. Matricula del vehiculo |

#### Get Vehiculo por UID

```http
  GET /api/vehiculos/uid/${uid}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `uid`      | `long` | **Requerido**. Uid del vehiculo |

![API POST Badge](https://img.shields.io/badge/API-POST-yellow?style=for-the-badge)

#### Post Vehiculo

```http
  POST /api/vehiculos/${tipoId}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `tipoId`      | `long` | **Requerido**. Id del tipo de vehiculo |
| `vehiculo`      | `Vehiculo` | **Requerido**. Objeto de tipo vehiculo con la matricula |

![API DELETE Badge](https://img.shields.io/badge/API-DELETE-red?style=for-the-badge)

#### Delete Vehiculo

```http
  DELETE /api/vehiculos/${idVehiculo}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `long` | **Requerido**. Id del vehiculo |

### Tabla Tipos de Vehiculos

![API GET Badge](https://img.shields.io/badge/API-GET-brightgreen?style=for-the-badge)

#### Get Tipos de Vehiculos

```http
  GET /api/tiposVehiculos
```

#### Get Tipo de Vehiculo por ID

```http
  GET /api/tiposVehiculos/${tipoId}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `tipoId`      | `long` | **Requerido**. Id del tipo de vehiculo |

### Tabla Tickets

![API GET Badge](https://img.shields.io/badge/API-GET-brightgreen?style=for-the-badge)

#### Get Tickets

```http
  GET /api/tickets
```

#### Get Ticket por ID

```http
  GET /api/tiposVehiculos/${tipoId}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `ticketId`      | `long` | **Requerido**. Id del ticket |

#### Get Tickets por matricula

```http
  GET /api/tiposVehiculos/matricula/${matricula}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `matricula`      | `String` | **Requerido**. Matricula del vehiculo |

#### Get Tickets Terminados

```http
  GET /api/tickets/terminados
```

#### Get Tickets En Curso

```http
  GET /api/tickets/en-Curso
```

#### Get Ticket En Curso por matricula

```http
  GET /api/tickets/en-curso/matricula/${matricula}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `matricula`      | `String` | **Requerido**. Matricula del vehiculo |

![API POST Badge](https://img.shields.io/badge/API-POST-yellow?style=for-the-badge)

#### Post Ticket en curso

```http
  POST /api/tickets/${matricula}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `matricula`      | `String` | **Requerido**. Matricula del vehiculo |
| `ticket`      | `Ticket` | **Requerido**. Objeto de tipo ticket |

![API PUT Badge](https://img.shields.io/badge/API-PUT-orange?style=for-the-badge)

#### Put Ampliar ticket en curso

```http
  POST /api/tickets/${idTicket}/ampliar
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `idTicket`      | `long` | **Requerido**. Id del ticket en curso a ampliar |
| `ticket`      | `Ticket` | **Requerido**. Objeto de tipo ticket |

#### Put Finalizar ticket en curso

```http
  POST /api/tickets/${idTicket}/finalizado
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `idTicket`      | `long` | **Requerido**. Id del ticket en curso a finalizar |
| `ticket`      | `Ticket` | **Requerido**. Objeto de tipo ticket |

