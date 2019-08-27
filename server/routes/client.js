const express = require("express");
const router = express.Router();
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

router.get("/sanity",async function (req, res) {
    const data = req.body;
    data.firstName;
    data.lastName;
    data.email;
    data.phone
    data.pass
    data.address
    data.city
    // const query =`INSERT INTO pokemon_type VALUES (${id}, '${type}')`
    // let result = await sequelize.query(query)
    // return result[0]
})

module.exports = router;