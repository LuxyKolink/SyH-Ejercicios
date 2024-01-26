CREATE DATABASE IF NOT EXISTS formDB;

-- Crear tabla User
CREATE TABLE IF NOT EXISTS User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    psw VARCHAR(255) NOT NULL
);

-- Crear tabla Clientes
CREATE TABLE IF NOT EXISTS Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    nit VARCHAR(20) NOT NULL,
    formType VARCHAR(255),
    response JSON NOT NULL,
    submissionDate DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Crear tabla Cuenta
CREATE TABLE IF NOT EXISTS Cuenta (
    id INT PRIMARY KEY NOT NULL,
    client_id INT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    interestRate FLOAT NOT NULL,
    minimumBalance FLOAT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Clientes(id)
);


-- Insertar registros en la tabla User
INSERT INTO User (name, address, phone, email, psw) VALUES
('Usuario1', 'Dirección1', '123456789', 'usuario1@example.com', 'contraseña1'),
('Usuario2', 'Dirección2', '987654321', 'usuario2@example.com', 'contraseña2'),
('Usuario3', 'Dirección3', '111223344', 'usuario3@example.com', 'contraseña3');

-- Insertar registros en la tabla Clientes
INSERT INTO Clientes (user_id, nit, formType, response, submissionDate) VALUES
(1, '123456789', 'TipoFormulario1', '{"campo1": "valor1", "campo2": "valor2"}', '2022-01-01'),
(2, '987654321', 'TipoFormulario2', '{"campo1": "valor3", "campo2": "valor4"}', '2022-01-02'),
(3, '111223344', 'TipoFormulario3', '{"campo1": "valor5", "campo2": "valor6"}', '2022-01-03');

-- Insertar registros en la tabla Cuenta
INSERT INTO Cuenta (id, client_id, name, interestRate, minimumBalance) VALUES
(1, 1, 'Cuenta1', 2.5, 1000.00),
(2, 2, 'Cuenta2', 3.0, 1500.00),
(3, 3, 'Cuenta3', 1.8, 800.00);