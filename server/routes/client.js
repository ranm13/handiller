const express = require("express");
const router = express.Router();

router.get("/sanity", function (req, res) {
    res.send("Works!")
})

module.exports = router;