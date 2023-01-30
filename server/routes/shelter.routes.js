const ShelterController = require('../controllers/shelter.controller');

module.exports = app => {
    app.get('/api/shelters', ShelterController.findAllPets);
    app.get('/api/shelters/:_id', ShelterController.findOnePet);
    app.post('/api/shelters/create', ShelterController.createPet);
    app.put('/api/shelters/update/:_id', ShelterController.updatePet);
    app.delete('/api/shelters/delete/:_id', ShelterController.deletePet);
}