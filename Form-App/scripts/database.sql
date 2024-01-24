CREATE DATABASE IF NOT EXISTS formDB;

-- Crear tabla User
CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    psw VARCHAR(255) NOT NULL
);

-- Crear tabla Clientes
CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    nit VARCHAR(20) NOT NULL,
    formType VARCHAR(255),
    response JSON NOT NULL,
    submissionDate DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Crear tabla Cuenta
CREATE TABLE Cuenta (
    id INT PRIMARY KEY NOT NULL,
    client_id INT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    interestRate FLOAT NOT NULL,
    minimumBalance FLOAT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Clientes(id)
);
