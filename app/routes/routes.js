'use strict';
module.exports = function (app) {
	var contactController = require('../controllers/contact');

	app.route('/api/contacts')
		.get(contactController.get)
		.post(contactController.add);

	app.route('/api/contacts/:id')
		.get(contactController.getById)
		.put(contactController.update)
		.delete(contactController.delete);
};