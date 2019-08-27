const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/details/:clientId",async function (req, res) {
    const clientId = req.params.clientId;

    let query = `SELECT cl.id, first_name,last_name,email,phone,password,address,ci.name
    FROM clients AS cl, cities AS ci 
    WHERE cl.id = ${clientId} AND ci.id = cl.city_id`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0][0];

    const client = {
        firstName: queryRes.first_name,
        lastName: queryRes.last_name,
        email: queryRes.email,
        phone: queryRes.phone,
        password: queryRes.phone,
        address: queryRes.address,
        city: queryRes.city_name
    }

    res.send(client)
})

router.get("/searchProfs/:professionalName/:region", async function (req, res) {
    const profName = req.params.professionalName;
    const region = req.params.region;

    //Take the region id
    let query = `SELECT areas.id as areas_id
    FROM areas
    WHERE areas.name="${region}"`

    let queryRes = await sequelize.query(queryRegion);
    const object = queryRes[0][0];

    //Take the proffesionId
    console.log(regionNum)

    res.send(object)
    //TODO QUERY
    
})

module.exports = router;