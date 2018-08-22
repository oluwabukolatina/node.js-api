var config = require('./server/config/config');

const app = require('./server/server');

const logger = require('./server/util/logger');

const mongoose = require('mongoose');

//keys file
//const keys = require('../..config/keys');
const keys = require('./server/config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {

    // useMongoClient:true

}).then(() => console.log('mongodb connected'))

    .catch(err => console.log(err));




app.listen(config.port);

logger.log('listening on http://localhost:' + config.port);