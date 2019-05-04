var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	Contact = require('./app/models/contact'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://capote:capote123@ds151486.mlab.com:51486/contacts');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.append('Access-Control-Allow-Methods', 'DELETE')
	res.append('Access-Control-Allow-Methods', 'PUT')
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
var routes = require('./app/routes/routes');
routes(app);

app.listen(process.env.PORT || 8000);