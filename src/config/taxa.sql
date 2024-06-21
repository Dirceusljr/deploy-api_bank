CREATE TABLE IF NOT EXISTS taxa (
  id int(11) NOT NULL AUTO_INCREMENT,
  taxa varchar(10) NOT NULL,
  percentual float NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO taxa (taxa, percentual) VALUES
('P', 0),
('D', 0.03),
('C', 0.05);

--  docker exec -i database-banco mariadb -u root -p${DB_ROOT_PASSWORD} ${DB_NAME} < src/config/taxa.sql