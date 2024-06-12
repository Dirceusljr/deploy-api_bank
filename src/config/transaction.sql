CREATE DATABASE IF NOT EXISTS bank_db;
USE bank_db;

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_method ENUM('P', 'C', 'D') NOT NULL,
    account_id INT,
    value DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'approved', 'denied') DEFAULT 'pending' NOT NULL,
        FOREIGN KEY (account_id) 
        REFERENCES accounts(id)
);

-- docker exec -i database-banco mariadb -u root -pr00t bank_db < src/config/transaction.sql