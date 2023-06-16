const router = require('express').Router(); 
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
    Menu.find()
        .then(menus => res.json(menus))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const storeID = req.body.storeID; 
    const resepID = req.body.resepID; 
    const stock = req.body.stock; 

    const newMenu = new Menu({storeID, resepID, stock}); 

    newMenu.save()
        .then(() => res.json('Stock added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').get((req, res) => {
    Menu.findById(req.params.id)
        .then(menu => res.json(menu))
        .catch(err=> res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').delete((req, res) => {
    Menu.findByIdAndDelete(req.params.id)
        .then(() => res.json("stock deleted"))
        .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('/update/:id').post((req, res) =>{
    Menu.findById(req.params.id)
        .then(menu => {
            menu.stock = req.body.stock;

            menu.save()
                .then(() => res.json('Stock Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));  
        })
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('')

module.exports = router; 