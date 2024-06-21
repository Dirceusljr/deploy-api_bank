-- CREATE TABLE IF NOT EXISTS transacao (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     forma_pagamento ENUM('P', 'C', 'D') NOT NULL,
--     conta_id INT,
--     valor DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (conta_id) 
--     REFERENCES conta(id)
-- );

CREATE TABLE IF NOT EXISTS transacao (
	id INT AUTO_INCREMENT PRIMARY KEY,
	forma_pagamento INT NOT NULL,
	conta_id INT NOT NULL,
	valor DECIMAL(10,2) NOT NULL,
	CONSTRAINT FK__taxa FOREIGN KEY (forma_pagamento) REFERENCES taxa (id),
	CONSTRAINT FK__products FOREIGN KEY (conta_id) REFERENCES conta (id)
);

-- docker exec -i database-banco mariadb -u root -pr00t bank_db < src/config/transacao.sql