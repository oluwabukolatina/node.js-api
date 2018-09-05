const express		= require("express"),
             app = express(),
             api = require('./api/api.js'),
           config = require('./config/config'),
            logger = require('./util/logger');
           // err = require('./middleware/err');

require('mongoose').connect(config.db.url);

if(config.seed) {
    require('./util/seed')
}

//midlleware thisway or
require('./middleware/appMiddleware')(app);

//this
// const setUpMiddleware = require('./middleware/appMiddleware')(app);

// setUpMiddleware(app);

app.use('/api', api);
app.use('/auth', auth);

app.use((err, req, res, next) => {
    res.status(500).json(err.message);
    next();
})

//set up global error handling
//app.use(err());
//app.use(err());

module.exports = app;
