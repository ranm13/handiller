const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize')
const moment = require('moment')
// Override timezone formatting for MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
const sequelize = new Sequelize('mysql://root:@localhost/handiller_db')

router.get("/professionals", async function (req, res) {

    let query = `SELECT Profession FROM professions`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0];

    const professions = queryRes.map(p => p.Profession)

    res.send(professions)
})


router.get("/appointments/:id", async function (req, res) {
    const id = req.params.id;
    const isClient = req.query.isClient;
    let fieldToSearch = "appointments.professional_id"

    if (isClient === "true")
        fieldToSearch = "appointments.client_id"


    let query = `SELECT DISTINCT * FROM appointments WHERE ${fieldToSearch}=${id}`

    let queryRes = await sequelize.query(query);

    const appointments = queryRes[0].map(appoint => {
        return {
            appointmentId: appoint.id,
            appointmentStatus: appoint.status,
            startDate: appoint.start_date,
            endDate: appoint.end_date,
            title: appoint.title,
            clientId: appoint.client_id,
            profId: appoint.professional_id
        }
    })

    res.send(appointments)

})

router.get("/cities", async function (req, res) {
    let query = `SELECT name FROM cities`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0];

    const cities = queryRes.map(c => c.name)

    res.send(cities)
})

router.get("/regions", async function (req, res) {
    let query = `SELECT name FROM areas`

    let queryRes = await sequelize.query(query);
    queryRes = queryRes[0];

    const areas = queryRes.map(a => a.name)

    res.send(areas)
})

router.post("/appointment", async function (req, res) {
    const data = req.body;
    const startDate = moment(new Date(data.startDate)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    const endDate = moment(new Date(data.endDate)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    let query = `INSERT INTO Appointments VALUES ( null, "pending", '${startDate}', '${endDate}', '${data.title}', ${data.profId}, ${data.clientId});`
    await sequelize.query(query)
    res.end()
})

router.put("/update-status/:appointmentId", async function (req, res) {
    const appointmentId = req.params.appointmentId
    const data = req.body;
    const startDate = moment(new Date(data.start)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    const endDate = moment(new Date(data.end)).subtract(3, "hours").format("YYYY-MM-DD HH:mm:ss.SSS")
    let query = `UPDATE Appointments 
                SET status = '${data.status}',
                start_date = '${startDate}', 
                end_date = '${endDate}', 
                title = '${data.title}'
                WHERE id = ${appointmentId};`
    await sequelize.query(query)
    res.end()
})

module.exports = router;

