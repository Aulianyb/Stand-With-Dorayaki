const router = require('express').Router(); 
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
    Menu.find()
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

router.route('/:id').get((req, res) => {
    Menu.findById(req.params.id)
        .then(menu => res.json(menu))
        .catch(err=> res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').delete((req, res) => {
    Menu.findByIdAndDelete(req.params.id)
        .then(() => res.json("menu deleted"))
        .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('/update/:id').post((req, res) =>{
    Menu.findById(req.params.id)
        .then(menu => {
            menu.rasa = req.body.rasa;
            menu.deskripsi = req.body.deskripsi;

            menu.save()
                .then(() => res.json('Menu Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));  
        })
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 