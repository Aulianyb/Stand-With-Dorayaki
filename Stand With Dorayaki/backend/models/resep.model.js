// ---> NOTICE!!
// nyoba nyoba aja
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const Schema = mongoose.Schema; 

const resepSchema = new Schema({
    resepID : {type: String}, // HELLPPPPP INI GIMANA
    rasa : { type: String, required: true},
    deskripsi : { type: String, required: true},
    // TO DO : ADD GAMBAR
}, {
    timestamps: true, 
}); 

resepSchema.pre('save', function(next) {
    if (!this.resepID) {
        this.resepID = uuidv4(); 
    }
    this.resepID = new mongoose.Types.ObjectId(this.resepID); 
    next(); 
}); 

const Resep = mongoose.model('Resep', resepSchema); 

module.exports = Resep; 