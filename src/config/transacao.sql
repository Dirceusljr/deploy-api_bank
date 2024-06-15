CREATE TABLE IF NOT EXISTS transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    forma_pagamento ENUM('P', 'C', 'D') NOT NULL,
    conta_id INT,
    valor DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (conta_id) 
    REFERENCES conta(id)
);

-- docker exec -i database-banco mariadb -u root -pr00t bank_db < src/config/transacao.sql