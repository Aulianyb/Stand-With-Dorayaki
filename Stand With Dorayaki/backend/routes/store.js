const router = require('express').Router(); 
let Store = require('../models/store.model');

router.route('/').get((req, res) => {
    Store.find()
        .then(stores => res.json(stores))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const nama = req.body.nama; 
    const jalan = req.body.jalan;
    const kecamatan = req.body.kecamatan; 
    const provinsi = req.body.provinsi; 

    const newStore = new Store({nama, jalan, kecamatan, provinsi}); 

    newStore.save()
        .then(() => res.json('Store added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').get((req, res) => {
    Store.findById(req.params.id)
        .then(store => res.json(store))
        .catch(err=> res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').delete((req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(() => res.json("store deleted"))
        .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('/update/:id').post((req, res) =>{
    Store.findById(req.params.id)
        .then(store => {
            store.nama = req.body.nama;
            store.jalan = req.body.jalan;
            store.kecamatan = req.body.kecamatan;
            store.provinsi = req.body.provinsi;

            store.save()
                .then(() => res.json('Store Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));  
        })
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 