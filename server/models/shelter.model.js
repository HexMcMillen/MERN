const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must have at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must have at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must have at least 3 characters!"]
    },
    skills: [String]
}, { timestamps: true });

const Shelter = new  mongoose.model('Shelter', ShelterSchema);
module.exports = Shelter;