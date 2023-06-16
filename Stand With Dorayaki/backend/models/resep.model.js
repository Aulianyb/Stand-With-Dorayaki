// ---> NOTICE!!
// nyoba nyoba aja
const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const resepSchema = new Schema({
    resepID : {type: String}, // HELLPPPPP INI GIMANA
    rasa : { type: String, required: true},
    deskripsi : { type: String, required: true},
    // TO DO : ADD GAMBAR
}, {
    timestamps: true, 
}); 

const Resep = mongoose.model('Resep', resepSchema); 

module.exports = Resep; 