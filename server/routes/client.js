const express = require("express");
const router = express.Router();
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

router.get("/details/:clientId",async function (req, res) {
    const clientId = req.params.clientId;
    //TODO QUERY
})

router.get("/client/searchProfs/:professionalName/:region", async function (req, res) {
    const profName = req.params.professionalName;
    const region = req.params.region;

    //TODO QUERY
    
})

module.exports = router;