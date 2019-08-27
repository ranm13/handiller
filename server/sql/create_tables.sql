-- create database handiller_DB;

USE handiller_DB;

-- DROP TABLE Appointments, Professionals_areas, Professions_professionals, Professionals, Professions, Clients, Cities_areas, Areas, Cities

-- CREATE TABLE Cities(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE Areas(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE Cities_areas(
--     city_id int,
--     area_id int,

--     FOREIGN KEY(city_id) REFERENCES Cities(id),
--     FOREIGN KEY(area_id) REFERENCES Areas(id)
-- );

-- CREATE TABLE Clients(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     email VARCHAR(30),
--     phone INT,
--     password VARCHAR(20),
--     address VARCHAR(20),
--     city_id int, 

--     FOREIGN KEY(city_id) REFERENCES cities(id)
-- );

-- CREATE TABLE Professions(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     Profession VARCHAR(40)
-- );

-- CREATE TABLE Professionals(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     email VARCHAR(30),
--     phone INT,
--     password VARCHAR(20),
--     address VARCHAR(20),
--     city_id INT, 
--     description  VARCHAR(300),

--     FOREIGN KEY(city_id) REFERENCES cities(id)
-- );

-- CREATE TABLE Professions_professionals(
--     professional_id INT,
--     profession_id INT,

--     FOREIGN KEY(professional_id) REFERENCES Professionals(id),
--     FOREIGN KEY(profession_id) REFERENCES Professions(id)
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

-- INSERT INTO Cities (id, name) VALUES(null, "Ramat-Gan");
-- INSERT INTO Cities (id, name) VALUES(null, "Haifa");
-- INSERT INTO Cities (id, name) VALUES(null, "Tel Aviv");

-- INSERT INTO Areas (id, name) VALUES(null, "Gush-Dan");
-- INSERT INTO Areas (id, name) VALUES(null, "HaTzafon");
-- INSERT INTO Areas (id, name) VALUES(null, "The West Bank");

-- INSERT INTO Cities_areas (city_id, area_id) VALUES(1, 1);
-- INSERT INTO Cities_areas (city_id, area_id) VALUES(2, 2);
-- INSERT INTO Cities_areas (city_id, area_id) VALUES(3, 1);

-- INSERT INTO Clients (id, first_name, last_name, email, phone, password, address, city_id) 
-- VALUES(null, "Yossi", "Shamir", "ys@gmail.com", 0524473652, "hdjfhf133", "Hashavim 12", 3 );
-- INSERT INTO Clients (id, first_name, last_name, email, phone, password, address, city_id) 
-- VALUES(null, "Shosh", "Breer", "cgfg@gmail.com", 0532478762, "dhfdj20", "Hapotzim 36", 1 );
-- INSERT INTO Clients (id, first_name, last_name, email, phone, password, address, city_id) 
-- VALUES(null, "Moti", "Gibor", "mg36@gmail.com", 0534455447, "5236hshr", "y.b 43", 1 );

-- INSERT INTO Professions (id, Profession) VALUES(null, "Air Conditioner Technician");
-- INSERT INTO Professions (id, Profession) VALUES(null, "Scooter Technician");
-- INSERT INTO Professions (id, Profession) VALUES(null, "Painter");

-- INSERT INTO Professionals (id, first_name, last_name, email, phone, password, address, city_id, description)
-- VALUES(null, "Kira", "Marco", "km@gmail.com", 0578893633, "dfghd22", "Brurim 2", 3 , "A friend, A brother");
-- INSERT INTO Professionals (id, first_name, last_name, email, phone, password, address, city_id, description)
-- VALUES(null, "Tal", "Museri", "tm243@gmail.com", 0538354463, "fdfd333r", "Hadror 26", 2 , "Boged");
-- INSERT INTO Professionals (id, first_name, last_name, email, phone, password, address, city_id, description)
-- VALUES(null, "Shreder", "Harasha", "turtleshater@gmail.com", 0549874362, "krain34", "Mimad X", 1 , "Atem olim li al ha-atzvim tzvim");

-- INSERT INTO Professions_professionals (professional_id, profession_id) VALUES(1, 2);
-- INSERT INTO Professions_professionals (professional_id, profession_id) VALUES(2, 1);
-- INSERT INTO Professions_professionals (professional_id, profession_id) VALUES(3, 3);

-- INSERT INTO Professionals_areas (professional_id, area_id) VALUES(1, 1);
-- INSERT INTO Professionals_areas (professional_id, area_id) VALUES(1, 3);
-- INSERT INTO Professionals_areas (professional_id, area_id) VALUES(2, 2);
-- INSERT INTO Professionals_areas (professional_id, area_id) VALUES(3, 1);
-- INSERT INTO Professionals_areas (professional_id, area_id) VALUES(3, 3);

-- INSERT INTO Appointments (id, status, start_date, end_date, title, professional_id, client_id)
-- VALUES(null, "approved", CURRENT_DATE(), CURRENT_DATE(), "meeting 1", 2, 3 );
-- INSERT INTO Appointments (id, status, start_date, end_date, title, professional_id, client_id)
-- VALUES(null, "canceld", CURRENT_DATE(), CURRENT_DATE(), "meeting 2", 1, 2 );
-- INSERT INTO Appointments (id, status, start_date, end_date, title, professional_id, client_id)
-- VALUES(null, "pending", CURRENT_DATE(), CURRENT_DATE(), "meeting 3", 2, 1 );