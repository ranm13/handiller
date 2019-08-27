const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/details/:clientId",async function (req, res) {
    const clientId = req.params.clientId;
    let query = `SELECT * 
    FROM clients AS cl, cities AS ci 
    WHERE cl.id = ${clientId} AND cl.id = ci.id `

    const a = await sequelize.query(query)
    res.send(a[0][0])
})

router.get("/searchProfs/:professionalName/:region", async function (req, res) {
    const profName = req.params.professionalName;
    const region = req.params.region;

    //TODO QUERY
    
})

module.exports = router;