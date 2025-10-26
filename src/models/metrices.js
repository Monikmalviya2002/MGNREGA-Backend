import mongoose from "mongoose";

const metricesSchema = new mongoose.Schema({
    district_code:String,
    month:String,
    workers_paid:Number,
    wages_paid:Number,
    person_days:Number,
    households_completed:Number,
    last_updated:{type:Date, default:Date.now}

})

export default metricesSchema;