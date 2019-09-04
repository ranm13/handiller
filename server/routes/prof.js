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
            ${true})`

    const authId = await sequelize.query(queryAuth);

    let queryProf = `INSERT INTO professionals 
            VALUES (${authId[0]},
            '${d.firstName}',
            '${d.lastName}',
            ${Number(d.phone)},
            '${d.address}',
            ${Number(d.cityNum)},
            '${d.desc}',
            ${d.profId}
            );`

    await sequelize.query(queryProf);


    for(let i=0; i<d.regions.length; i++){
        let queryRegion = `INSERT INTO professionals_areas 
                VALUES (${authId[0]},${d.regions[i]});`
        await sequelize.query(queryRegion);
    }

    res.send({userId:authId[0]})
})

router.get("/details/:profId", async function (req, res) {
    const profId = req.params.profId;

    let query = `SELECT prof.id as prof_id, first_name,last_name,users.email,phone,address,ci.name as city_name, description, profession
    FROM professionals AS prof, cities AS ci, professions,professionals_areas as ps, areas, users
    WHERE prof.id = ${profId} AND 
    users.id = ${profId} AND
    ci.id = prof.city_id AND
    prof.profession_id = professions.id`

    let queryRegion = `SELECT DISTINCT areas.name as region
    FROM professionals AS prof, professionals_areas as ps, areas
    WHERE ps.professional_id = ${profId} AND areas.id = ps.area_id`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0][0];

    let queryRegionRes = await sequelize.query(queryRegion);
    const regions = queryRegionRes[0].map(r => r.region)

    const prof = {
        id: queryRes.prof_id,
        firstName: queryRes.first_name,
        lastName: queryRes.last_name,
        email: queryRes.email,
        phone: queryRes.phone,
        address: queryRes.address,
        city: queryRes.city_name,
        regions,
        profession: queryRes.profession,
        description: queryRes.description
    }

    res.send(prof)
})

module.exports = router;