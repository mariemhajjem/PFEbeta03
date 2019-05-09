const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Formation = require('../Models/formation');
const User = require('../Models/User');
let Session = new Schema({
    name : {
      type: String
    },
    date: {
      type: String 
    },
    Formations:{
      type: mongoose.Schema.Types.ObjectId, ref:'Formation'
    },
    Formateur : {
      type : String
    },
    NbPlaces : {
      type : Number
    },
    Horaires : {
      type : String
    },
    NbHeures : {
      type : Number
    },
    userId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }]

  },
  {
    collection: 'sessions'
  }, {timestamps: true});


module.exports = mongoose.model('Session', Session);
