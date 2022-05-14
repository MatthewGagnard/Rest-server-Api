const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    NAME:{type:String,
        required:true,
    collation:{locale:'en_US',strength:1}},
    HP: Number,
    AC: Number,
    SPEED: Number,
    STR: Number,
    DEX: Number,
    CON: Number,
    WIS: Number,
    CHA: Number,
    INT: Number,
    Race: Number,
    INVEN:[String]
},
{collection:'Players'});

const character =  module.exports = mongoose.model('Player',playerSchema);