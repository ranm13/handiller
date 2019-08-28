const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/details/:profId", async function (req, res) {
    const profId = req.params.profId;

    let query = `SELECT prof.id, first_name,last_name,email,phone,address,ci.name as city_name, description, profession
    FROM professionals AS prof, cities AS ci, professions,professionals_areas as ps, areas
    WHERE prof.id = ${profId} AND 
    ci.id = prof.city_id AND
    prof.profession_id = professions.id`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0][0];

    const prof = {
        firstName: queryRes.first_name,
        lastName: queryRes.last_name,
        email: queryRes.email,
        phone: queryRes.phone,
        address: queryRes.address,
        city: queryRes.city_name,
        profession: queryRes.profession,
        description: queryRes.description
    }

    res.send(prof)
})

module.exports = router;