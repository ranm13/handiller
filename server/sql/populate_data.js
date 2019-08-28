const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:hoshea1234@localhost/handiller_db')

const checkArea = async function(area){
    let query = `SELECT * FROM areas WHERE name = "${area}"`
    return await sequelize.query(query)
}

const insertArea = async function(area){
    let query =`INSERT INTO areas VALUES (null , "${area}")`
    let result = await sequelize.query(query)
    return result[0]
}

const insertCity = async function(cityName, areaId){
    let query =`INSERT INTO cities VALUES ( null, "${cityName}", ${areaId});`
    let result = await sequelize.query(query)
    return result[0]
}

const insertData = async function(){
    const jsonFile = await require('./real-data-json.json')
    for(let city of jsonFile){
        let area = await checkArea(city.region)
        let areaId = area[0][0]? area[0][0].id: null
        if(!area[0][0]){
            let areaRes = await insertArea(city.region)
            areaId = areaRes
        }
        await insertCity(city.city, areaId)
    }
}

const insertProfessions = async function(){
    const lisotOfProf = ["Air Conditioner Technician", "Audio and Video Equipment Technician","Bicycle Repairer", "Boiler Technician", 
                        "Cable Technician", "Coffee Machine Repairer", "Computer Technician","Dishwasher Repairer", "Dryer Technician", 
                        "Electrician", "Elevator Repairer", "General Technician", "Guitar Technician","House Cleaner", "Housekeeping Cleaner", 
                        "Lighting Technician", "Microwave Repairer", "Motorcycle Technician", "Painter", "Piano Technician", "Plumber", 
                        "Printer Technician", "Refrigerator Installer", "Refrigerator Technician", "Safe Repairer", "Scooter Technician", 
                        "Stove Repairer", "Television Technician", "Water Services Technician", "Washing Machine Repairer"]

    for(let prof of lisotOfProf){
        let query =`INSERT INTO Professions VALUES (null, "${prof}")`
        let result = await sequelize.query(query)
    }
}

insertData()
insertProfessions()
