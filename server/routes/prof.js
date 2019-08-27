const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')

router.get("prof/details/:profId", function (req, res) {
    const profId = req.params.profId;
    
})

module.exports = router;