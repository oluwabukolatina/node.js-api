const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000

};

//check to see if the node_env was set, if not, set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

//set confi.env ro whatever the node_env is
config.env = process.env.NODE_ENV;
