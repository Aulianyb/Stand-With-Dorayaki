const router = require('express').Router(); 
let Resep = require('../models/resep.model');

router.route('/').get((req, res) => {
    Resep.find()
        .then(resep => res.json(resep))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const resepID = req.body.resepID;
    const rasa = req.body.rasa;
    const deskripsi = req.body.deskripsi; 

    const newResep = new Resep({resepID, rasa, deskripsi}); 

    newResep.save()
        .then(() => res.json('Resep added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').delete((req, res) => {
    Resep.findByIdAndDelete(req.params.id)
        .then(() => res.json("Resep deleted"))
        .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('')

module.exports = router; 