const router = require('express').Router(); 
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
    User.find()
        .then(menus => res.json(menus))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const rasa = req.body.rasa; 
    const deskripsi = req.body.deskripsi; 

    const newMenu = new Menu({rasa, deskripsi}); 

    newMenu.save()
        .then(() => res.json('Menu added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 