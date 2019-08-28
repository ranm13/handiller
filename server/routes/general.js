const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const moment = require('moment')
// Override timezone formatting for MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/professionals", function (req, res) {
    
})


router.get("/appointments/:id", function (req, res) {
    const id = req.params.id;
    const isClient = req.query.isClient;
    
})

router.get("/cities", function (req, res) {
    
})

router.get("/regions", function (req, res) {
    
})

router.post("/appointment",async function (req, res) {
    const data = req.body;
    const startDate = moment(new Date(data.start)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    const endDate = moment(new Date(data.end)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    let query =`INSERT INTO Appointments VALUES ( null, "pending", '${startDate}', '${endDate}', '${data.title}', ${data.pro_id}, ${data.cli_id});`
    await sequelize.query(query)
    res.end()
})

router.put("/update-status/:appointmentId", async function (req, res) {
    const appointmentId = req.params.appointmentId
    const data = req.body;
    console.log(appointmentId)
    console.log(data)
    const startDate = moment(new Date(data.start)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    const endDate = moment(new Date(data.end)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    let query =`UPDATE Appointments 
                SET status = '${data.status}',
                start_date = '${startDate}', 
                end_date = '${endDate}', 
                title = '${data.title}'
                WHERE id = ${appointmentId};`
    await sequelize.query(query)
    res.end()
})

module.exports = router;

// const insertCity = async function(cityName, areaId){
//     let query =`INSERT INTO cities VALUES ( null, "${cityName}", ${areaId});`
//     let result = await sequelize.query(query)
//     return result[0]
// }
// (null, "approved", CURRENT_DATE(), CURRENT_DATE(), "meeting 1", 2, 3 )
// Appointments (id, status, start_date, end_date, title, professional_id, client_id)