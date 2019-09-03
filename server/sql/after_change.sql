USE handiller_DB;

-- DROP TABLE Appointments, Professionals_areas, Professionals, Clients

-- CREATE TABLE Users(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(40),
--     pass VARCHAR(12),
--     isProf BOOLEAN
-- );

-- CREATE TABLE Clients(
--     id INT PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     phone INT,
--     address VARCHAR(20),
--     city_id int,

--     FOREIGN KEY(id) REFERENCES users(id),
--     FOREIGN KEY(city_id) REFERENCES cities(id)
-- );

-- CREATE TABLE Professionals(
--     id INT PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     phone INT,
--     address VARCHAR(20),
--     city_id INT, 
--     description  VARCHAR(300),
--     profession_id INT,

--     FOREIGN KEY(id) REFERENCES users(id),
--     FOREIGN KEY(profession_id) REFERENCES Professions(id),
--     FOREIGN KEY(city_id) REFERENCES cities(id)
-- );


-- CREATE TABLE Professionals_areas(
--     professional_id INT,
--     area_id int,

--     FOREIGN KEY(professional_id) REFERENCES Professionals(id),
--     FOREIGN KEY(area_id) REFERENCES Areas(id)
-- );

-- CREATE TABLE Appointments(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     status VARCHAR(20),
--     start_date TIMESTAMP NOT NULL ,
--     end_date TIMESTAMP NOT NULL ,
--     title VARCHAR(20),
--     professional_id INT,
--     client_id INT,

--     FOREIGN KEY(professional_id) REFERENCES Professionals(id),
--     FOREIGN KEY(client_id) REFERENCES Clients(id)
-- );