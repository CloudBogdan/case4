const
    mongoose = require("mongoose"),
    { Schema, models } = require("mongoose");

const WorkerSchema = new Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    birthday: String,
    human_id: String,
    date: String,

    login: String,
    password: String,
});

export default models.Worker || mongoose.model("Worker", WorkerSchema);