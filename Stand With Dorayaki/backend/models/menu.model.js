const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const menuSchema = new Schema({
    rasa : { type: String, required: true},
    deskripsi : { type: String, required: true},
    // TO DO : Add Gambar ntar
}, {
    timestamps: true, 
}); 

const Menu = mongoose.model('Menu', menuSchema); 

module.exports = Menu; 