const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/login/:email/:pass", async function (req, res) {
    const email = req.params.email;
    const pass = req.params.pass;
    let isValid = false;

    let query = `SELECT * FROM users WHERE email = "${email}"`

    let queryRes = await sequelize.query(query);

    if(queryRes[0][0] && pass === queryRes[0][0].pass)
        isValid = true

    res.send(isValid)
})

module.exports = router;