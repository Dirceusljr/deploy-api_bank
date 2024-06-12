CREATE DATABASE IF NOT EXISTS bank_db;
USE bank_db;

CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_number BIGINT NOT NULL,
    balance DECIMAL(10, 2) NOT NULL
);

INSERT INTO accounts (account_number, balance) VALUES
(1234567890, 100.00),
(2345678901, 200.00),
(3456789012, 300.00),
(4567890123, 400.00),
(5678901234, 500.00);

-- docker exec -i database-banco mariadb -u root -pr00t bank_db < src/config/account.sql