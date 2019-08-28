const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/details/:clientId",async function (req, res) {
    const clientId = req.params.clientId;

    let query = `SELECT cl.id as client_id, first_name,last_name,email,phone,address,ci.name as city_name, areas.name as region
    FROM clients AS cl, cities AS ci, areas
    WHERE 
    cl.id = ${clientId} AND 
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

    let query = `SELECT DISTINCT p.id, p.first_name, p.last_name, p.email, p.phone, p.address, cities.name as city,prof.profession, p.description, prof_area.area_id
    FROM areas, cities, professions as prof, professionals_areas as prof_area, professionals as p
    WHERE
    areas.name="${region}" AND
    prof.Profession="${profName}" AND
    p.profession_id = prof.id AND
    prof_area.area_id = areas.id AND
    prof_area.professional_id = p.id AND
    p.city_id = cities.id AND
    prof_area.professional_id = p.id`


    let queryRes = await sequelize.query(query);
    const professionals = queryRes[0].map( p => {
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