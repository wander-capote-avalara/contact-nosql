'use strict';

var mongoose = require('mongoose'),
	Contact = mongoose.model('Contacts');

exports.get = function (req, res) {
	Contact.find({}, function (err, Contact) {
		if (err)
			res.send("Erro ao encontrar contatos!");
		res.json(Contact);
	});
};

exports.add = function (req, res) {
	var new_contact = new Contact(req.body);
	new_contact.save(function (err, Contact) {
		if (err)
			res.send("Erro na criação do contato!");
		res.json(Contact);
	});
};

exports.getById = function (req, res) {
	Contact.findById(req.params.id, function (err, Contact) {
		if (err)
			res.send("Contato não encontrado!");
		res.json(Contact);
	});
};

exports.update = function (req, res) {
	Contact.findById(req.params.id, function (err, Contact) {
		if (err)
			res.send("Contado não encontrado!");
		res.json(Contact);
	});
	Contact.findOneAndUpdate({
		_id: req.params.id
	}, req.body, {
			new: true
		}, function (err, Contact) {
			if (err)
				res.send("Erro ao editar o contato!");
		});
};

exports.delete = function (req, res) {
	Contact.remove({
		_id: req.params.id
	}, function (err, Contact) {
		if (err)
			res.send("Erro ao deletar contato!");
		res.json({
			message: 'Contato deletado com sucesso!'
		});
	});
};