// ---> NOTICE!!
// MUNGKIN GAK DIPAKE :)
// INI TESTING AJA SOALNYA AKU GATAU APAKAH LEBIH BAIK NESTED ATAU GAK
const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const menuSchema = new Schema({
    storeID : { type: String, required: true},
    resepID : { type: String, required: true},
    stock : {type: Number, required: true},
}, {
    timestamps: true, 
}); 

const Menu = mongoose.model('Menu', menuSchema); 

module.exports = Menu; 