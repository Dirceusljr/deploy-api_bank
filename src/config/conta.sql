CREATE DATABASE IF NOT EXISTS bank_db;
USE bank_db;

CREATE TABLE IF NOT EXISTS conta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conta_id BIGINT NOT NULL,
    saldo DECIMAL(10, 2) NOT NULL
);

INSERT INTO conta (conta_id, saldo) VALUES
(1234, 100.00),
(0502, 200.00),
(1109, 300.00),
(2301, 400.00),
(2212, 500.00);

-- docker exec -i database-banco mariadb -u root -pr00t bank_db < src/config/conta.sql