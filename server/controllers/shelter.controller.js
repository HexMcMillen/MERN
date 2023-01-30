const Shelter = require('../models/shelter.model')

module.exports.createPet = (req, res) => {
    Shelter.create(req.body)
        .then( (pet) => { res.json({ pet }) })
        .catch( (err) => res.status(400).json({ message: "Something went wrong!", error: err }));
}

module.exports.findAllPets = (req, res) => {
    Shelter.find()
        .then((allPets) => { res.json({ pets: allPets }) })
        .catch( (err) => res.status(400).json({ message: "Something went wrong!", error: err }));
}

module.exports.findOnePet = (req, res) => {
    Shelter.findOne({ _id: req.params._id })
        .then((pet) => { res.json({ pet: pet }) })
        .catch( (err) => res.status(400).json({ message: "Something went wrong!", error: err }));
}

module.exports.updatePet = (req, res) => {
    Shelter.update({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((updatedPet) => { res.json({ pet: updatedPet }) })
        .catch( (err) => res.status(400).json({ message: "Something went wrong!", error: err }));
}

module.exports.deletePet = (req, res) => {
    Shelter.deleteOne({ _id: req.params._id })
        .then((results) => { res.json({ result: results }) })
        .catch( (err) => res.status(400).json({ message: "Something went wrong!", error: err }));
}

