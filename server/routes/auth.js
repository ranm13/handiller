const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/login/:email/:pass", async function (req, res) {
    const email = req.params.email;
    const pass = req.params.pass;
    let user = {isValid: false};

    let query = `SELECT * FROM users WHERE email = "${email}"`

    let queryRes = await sequelize.query(query);

    if(queryRes[0][0] && pass === queryRes[0][0].pass){
        user = {
            isValid: true,
            userId: queryRes[0][0].id,
            isProf: queryRes[0][0].isProf
        }
    }

    res.send(user)
})

module.exports = router;