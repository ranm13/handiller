const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@localhost/handiller_DB')

router.get("/prof-details/:profId", async function (req, res) {
    let id = req.params.profId
    res.send("Works!")
})

module.exports = router;