// ---> NOTICE!!
// MUNGKIN GAK DIPAKE :)
// INI TESTING AJA SOALNYA AKU GATAU APAKAH LEBIH BAIK NESTED ATAU GAK

const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const storeSchema = new Schema(
    {
        nama: { type: String, required: true, unique: true, trim: true, }, 
        jalan : {type : String, required: true, trim: true},
        kecamatan :  {type : String, required: true, trim: true}, 
        provinsi : {type : String, required : true, trim : true},
    }, {
        timestamps: true,
    }
); 

const Store = mongoose.model('Store', storeSchema); 

module.exports = Store;