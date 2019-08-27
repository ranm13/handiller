-- create database handiller_DB;

USE handiller_DB;

-- DROP TABLE Appointments, Professionals_areas, Professions_professionals, Professionals, Professions, Clients, Cities_areas, Areas, Cities

CREATE TABLE Cities(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);
CREATE TABLE Areas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE Cities_areas(
    city_id int,
    area_id int,

    FOREIGN KEY(city_id) REFERENCES Cities(id),
    FOREIGN KEY(area_id) REFERENCES Areas(id)
);

CREATE TABLE Clients(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(30),
    phone INT,
    password VARCHAR(20),
    address VARCHAR(20),
    city_id int, 

    FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE Professions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Profession VARCHAR(40)
);
CREATE TABLE Professionals(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(30),
    phone INT,
    password VARCHAR(20),
    address VARCHAR(20),
    city_id INT, 
    description  VARCHAR(300),

    FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE Professions_professionals(
    professional_id INT,
    profession_id INT,

    FOREIGN KEY(professional_id) REFERENCES Professionals(id),
    FOREIGN KEY(profession_id) REFERENCES Professions(id)
);

CREATE TABLE Professionals_areas(
    professional_id INT,
    area_id int,

    FOREIGN KEY(professional_id) REFERENCES Professionals(id),
    FOREIGN KEY(area_id) REFERENCES Areas(id)
);


CREATE TABLE Appointments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(20),
    start_date TIMESTAMP NOT NULL ,
    end_date TIMESTAMP NOT NULL ,
    title VARCHAR(20),
    professional_id INT,
    client_id INT,

    FOREIGN KEY(professional_id) REFERENCES Professionals(id),
    FOREIGN KEY(client_id) REFERENCES Clients(id)
);

