const express = require("express");
const router = express.Router();

router.get("/professionals", function (req, res) {
    
})

router.get("/appointment/:id?isClient", function (req, res) {
    const id = req.params.id;
    let isClient = false;

    if(req.query.isClient === "true")
        isClient = true;
    
})

router.get("/appointments/:id", function (req, res) {
    const id = req.params.id;
    
})

router.get("/cities", function (req, res) {
    
})

router.get("/regions", function (req, res) {
    
})

router.get("/citiesByRegion/:region", function (req, res) {
    const region = req.params.region;

})

router.get("/regionByCity/:city", function (req, res) {
    const city = req.params.city;

})

router.post("/appointment", function (req, res) {
    const data = req.body;
    
})

router.put("/update-status/:appointmentId", function (req, res) {
    
})

module.exports = router;