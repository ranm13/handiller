const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')
// const sequelize = new Sequelize('mysql://root:hoshea1234@localhost/handiller_db')

router.post("/signup", async function (req, res) {
    const d = req.body;

    let queryAuth = `INSERT INTO users 
        VALUES ( null,
            '${d.email}',
            '${d.pass}',
            ${false})`

    const authId = await sequelize.query(queryAuth);

    let queryClients = `INSERT INTO clients 
            VALUES (${authId[0]},
            '${d.firstName}',
            '${d.lastName}',
            ${Number(d.phone)},
            '${d.address}',
            ${Number(d.cityNum)});`

    await sequelize.query(queryClients)
    res.end()
})

router.get("/details/:clientId", async function (req, res) {
    const clientId = req.params.clientId;

    let query = `SELECT cl.id as client_id, first_name,last_name,users.email,phone,address,ci.name as city_name, areas.name as region
    FROM clients AS cl, cities AS ci, users, areas
    WHERE 
    cl.id = ${clientId} AND
    users.id = ${clientId} AND
    ci.id = cl.city_id AND 
    ci.area_id = areas.id`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0][0];

    const client = {
        id: queryRes.client_id,
        firstName: queryRes.first_name,
        lastName: queryRes.last_name,
        email: queryRes.email,
        phone: queryRes.phone,
        address: queryRes.address,
        city: queryRes.city_name,
        region: queryRes.region
    }

    res.send(client)
})

router.get("/searchProfs/:professionalName/:region", async function (req, res) {

    const profName = req.params.professionalName;
    const region = req.params.region;

    let query = `SELECT DISTINCT p.id, p.first_name, p.last_name, users.email, p.phone, p.address, cities.name as city,prof.profession, p.description, prof_area.area_id
    FROM areas, cities, professions as prof, professionals_areas as prof_area, professionals as p, users
    WHERE
    areas.name="${region}" AND
    prof.Profession="${profName}" AND
    p.profession_id = prof.id AND
    prof_area.area_id = areas.id AND
    prof_area.professional_id = p.id AND
    users.id = p.id AND
    p.city_id = cities.id AND
    prof_area.professional_id = p.id`


    let queryRes = await sequelize.query(query);
    const professionals = queryRes[0].map(p => {
        return {
            profId: p.id,
            firstName: p.first_name,
            lastName: p.last_name,
            email: p.email,
            phone: p.phone,
            address: p.address,
            city: p.city,
            profession: p.profession,
            description: p.description
        }
    });

    res.send(professionals)
})

module.exports = router;