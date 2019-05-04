'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	id: {
		type: String
	},
	name: {
		type: String,
		required: [true, 'Campo nome necessário']
	},
	last_name: {
		type: String,
		required: [true, 'Campo sobrenome necessário']
	},
	phone: {
		type: String,
		required: [true, 'Campo telefone necessário']
	},
	street: {
		type: String,
		required: [true, 'Campo rua necessário']
	},
	neighborhood: {
		type: String,
		required: [true, 'Campo bairro necessário']
	},
	city: {
		type: String,
		required: [true, 'Campo cidade necessário']
	},
	district: {
		type: String,
		required: [true, 'Campo uf necessário']
	},
	number: {
		type: Number,
		required: [true, 'Campo número necessário']
	},
	mail: {
		type: String,
		required: [true, 'Campo e-mail necessário'],
		unique: true
	}
});

ContactSchema.pre('save', function (next) {
	this.id = this.get('_id');
	next();
});

module.exports = mongoose.model('Contacts', ContactSchema);