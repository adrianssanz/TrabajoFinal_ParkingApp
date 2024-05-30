-- Crear la tabla tipos_vehiculos
CREATE TABLE IF NOT EXISTS tipos_vehiculos (
    tipo_id INT PRIMARY KEY,
    tipo_vehiculo VARCHAR(50) NOT NULL,
    tarifa_hora DOUBLE NOT NULL
);

-- Insertar datos en la tabla tipos_vehiculos
INSERT INTO tipos_vehiculos (tipo_id, tipo_vehiculo, tarifa_hora) VALUES
(1, 'turismo', 2.5),
(2, 'moto', 1.5),
(3, 'furgoneta', 3.0);

-- Crear la tabla vehiculos
CREATE TABLE IF NOT EXISTS vehiculos (
    vehiculo_id INT PRIMARY KEY,
    matricula VARCHAR(15) NOT NULL,
    tipo_id INT,
    uid VARCHAR(50),
    FOREIGN KEY (tipo_id) REFERENCES tipos_vehiculos(tipo_id)
);

-- Crear la tabla tickets
CREATE TABLE IF NOT EXISTS tickets (
    ticket_id BIGINT PRIMARY KEY,
    vehiculo_id INT,
    hora_inicio DATETIME NOT NULL,
    hora_fin DATETIME,
    precio DOUBLE,
    estado VARCHAR(255),
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(vehiculo_id)
);
