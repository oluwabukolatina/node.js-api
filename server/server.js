const express = require('express');

const app = express();

const api = require('./api/api');

//midlleware thisway or
require('./middleware/appMiddleware')(app);

//this
// const setUpMiddleware = require('./middleware/appMiddleware')(app);

// setUpMiddleware(app);

app.use('/api', api);

//errorhandling

module.exports = app;

// const bodyParser = require('body-parser');

// const _ = require('lodash');

// app.use(express.static('client'));

// //post json to the server
// // access data as req.bodyParsera
// app.use(bodyParser.urlencoded({ extended: true}));

// app.use(bodyParser.json());

// // const jsonData = { count: 12, message: 'hey' };

// const fs = require('fs');

// // app.get('/', (req, res) => {
// //
// // 	fs.readFile('index.html', (err, buffer) => {
// //
// // 		const html = buffer.toString();
// //
// // 		res.setHeader('Content-type', 'text/html');
// //
// // 		res.send(html);
// //
// // 	});

// 	// res.sendFile(__dirname + '/index.html',(err) => {
// 	//
// 	// 	if(err) {
// 	//
// 	// 		res.status(500).send(err);
// 	//
// 	// 	}
// 	//
// 	// });


// 	//});
// // app.get('/data', (req, res) => {
// //
// // 	res.json(jsonData);
// //
// // });

// const lions = [];

// const id = 0;

// app.get('/lions', (req, res) => {

// 	res.json(lions);

// });

// app.get('/lions/:id', (req, res) => {

// 	const lion = _.find(lions, {id: req.params.id});

// 	res.json(lions || {} );

// });

// app.post('/lions', (req, res) => {

// 	const lion = req.body;

// 	id++;

// 	lion.id = id + '';

// 	lions.push(lion);

// 	res.json(lion);

// });

// const port = 7646;

// app.listen(port, () => {

// 	console.log('listening on localhost:', port);

// });
