var mongoose = require('mongoose');

var SeasonsSchema = new mongoose.Schema({
	seasonName: String,
	seasonNumber: Number,
	seasonLocation: String,
	yearOfSeason: Number,
	monthOfSeason: String
});

mongoose.model('SeasonsData', SeasonsSchema, 'SeasonsData');
/*
var TribeSchema = new mongoose.Schema({
	seasonName: String,
	contestantName: String
});

mongoose.model('TribeData', TribeSchema, 'TribeData');
*/
var ContestantsSchema = new mongoose.Schema({
	contestantName: String,
	Age: Number,
	seasonName: String,
	livingLocationCity: String,
	livingLocationState: String,
	finish: Number
});

mongoose.model('ContestantsData', ContestantsSchema, 'ContestantsData');