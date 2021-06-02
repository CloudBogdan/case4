const
    mongoose = require("mongoose"),
    { Schema, models } = require("mongoose");

const HumanSchema = new Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    birthday: String,
    date: String,

    login: String,
    password: String,
});

export default models.Human || mongoose.model("Human", HumanSchema);