import { getDb } from "./database.js";

export const getVehiclesData = async (req, res, next) => {
    try{
        
        const _db = getDb();

        const vehiclesCollection = _db.collection('vehicles');

        const vehicleObjects = await vehiclesCollection.find({}).toArray();

        if(vehicleObjects.length === 0){
            return res.status(404).json({
                message : "No vehicle data found"
            });
        }

        return res.status(200).json({
            message : "Data fetched",
            vehicles : vehicleObjects
        });
        
    } catch (err) {
        console.error("Error fetching vehicles:", err);
        return res.status(500).json({
            error : err.message,
            message : "Some unexpected error occured"
        });
    }
}